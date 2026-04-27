import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    if (!id || !pass) {
      alert("Enter ID and Password");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, pass })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("plan", data.plan);

        alert("✅ Login Successful");
        router.push("/super");
      } else {
        alert("❌ Invalid ID or Password");
      }

    } catch (err) {
      alert("⚠️ Server error");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#111",
      color: "#fff"
    }}>
      <div style={{
        background: "#222",
        padding: 30,
        borderRadius: 10,
        textAlign: "center",
        width: 300
      }}>
        <h2>🔐 Login</h2>

        <input
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={inputStyle}
        />

        <button onClick={login} style={btnStyle}>
          Login
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  border: "none"
};

const btnStyle = {
  width: "100%",
  padding: 10,
  background: "#ff416c",
  color: "#fff",
  border: "none",
  borderRadius: 5,
  cursor: "pointer"
};

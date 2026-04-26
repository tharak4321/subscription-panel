import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    plan: "Normal - ₹500"
  });

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    router.push("/pay");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      fontFamily: "Arial"
    }}>

      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "15px",
        width: "90%",
        maxWidth: "350px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>

        <h2 style={{ marginBottom: 10 }}>🔥 Premium Access</h2>
        <p style={{ fontSize: 13, color: "gray", marginBottom: 20 }}>
          Get instant access after payment
        </p>

        <form onSubmit={submit}>

          <input
            placeholder="Enter your name"
            required
            style={inputStyle}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Enter your age"
            required
            style={inputStyle}
            onChange={(e) =>
              setForm({ ...form, age: e.target.value })
            }
          />

          <select
            style={inputStyle}
            onChange={(e) =>
              setForm({ ...form, plan: e.target.value })
            }
          >
            <option>Normal - ₹500</option>
            <option>Super - ₹1000 ⭐</option>
          </select>

          <button type="submit" style={btnStyle}>
            Continue →
          </button>

        </form>

        <p style={{ fontSize: 11, color: "gray", marginTop: 15 }}>
          🔒 Secure payment • Instant access
        </p>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none"
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

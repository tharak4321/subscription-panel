import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ id, pass }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("plan", data.plan);
      router.push("/super");
    } else {
      alert("❌ Invalid ID or Password");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>🔐 Super User Login</h2>

      <input placeholder="User ID"
        onChange={(e)=>setId(e.target.value)} />
      <br /><br />

      <input type="password" placeholder="Password"
        onChange={(e)=>setPass(e.target.value)} />
      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
          }

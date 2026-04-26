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
    <div style={bg}>
      <div style={overlay}>
        <div style={card}>

          <h2 style={{ marginBottom: 10 }}>🔥 Premium Access</h2>
          <p style={{ fontSize: 13, color: "#ccc", marginBottom: 20 }}>
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

          <p style={{ fontSize: 11, color: "#aaa", marginTop: 15 }}>
            🔒 Secure payment • Instant access
          </p>

        </div>
      </div>
    </div>
  );
}

/* 🔥 Background Image */
const bg = {
  minHeight: "100vh",
  width: "100%",
  backgroundImage: "url('https://i.ibb.co/B51tRxHZ/image-49.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* 🔥 Dark Overlay */
const overlay = {
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

/* 💎 Glass Card */
const card = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "15px",
  width: "90%",
  maxWidth: "350px",
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
};

/* ✏️ Inputs */
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
  outline: "none"
};

/* 🔘 Button */
const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(45deg,#ff416c,#ff4b2b)",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 0 15px rgba(255,75,43,0.6)"
};

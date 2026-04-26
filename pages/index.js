import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    plan: "Super - ₹1000" // ✅ default
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

          <p style={{ fontSize: 13, color: "#ccc", marginBottom: 10 }}>
            Get instant access after payment
          </p>

          {/* 🔥 Subscription Info */}
          <div style={infoBox}>
            ⏳ <b>2 Months Access</b><br/>
            🔄 Renewal required after expiry
          </div>

          <form onSubmit={submit}>

            {/* NAME */}
            <input
              placeholder="Enter your name"
              required
              style={inputStyle}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            {/* AGE */}
            <input
              placeholder="Enter your age"
              required
              style={inputStyle}
              onChange={(e) =>
                setForm({ ...form, age: e.target.value })
              }
            />

            {/* 🔥 PLAN SELECTION */}
            <div style={{ marginBottom: 20 }}>

              <p style={{ marginBottom: 10, color: "#ccc" }}>
                Choose your plan:
              </p>

              {/* NORMAL */}
              <div
                onClick={() =>
                  setForm({ ...form, plan: "Normal - ₹500" })
                }
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  cursor: "pointer",
                  border: form.plan.includes("Normal")
                    ? "2px solid #fff"
                    : "1px solid #555",
                  background: "rgba(255,255,255,0.05)",
                  color: "#ddd"
                }}
              >
                <b>Normal Users – ₹500</b>
                <ul style={{ fontSize: 12, marginTop: 5 }}>
                  <li>✔ Add to subscription channel</li>
                  <li>✔ First to see the content</li>
                  <li>✔ All media access allowed</li>
                </ul>
              </div>

              {/* SUPER */}
              <div
                onClick={() =>
                  setForm({ ...form, plan: "Super - ₹1000" })
                }
                style={{
                  padding: "15px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  border: form.plan.includes("Super")
                    ? "2px solid gold"
                    : "2px solid #ff4b2b",
                  background: "linear-gradient(45deg,#ff416c,#ff4b2b)",
                  color: "#fff",
                  boxShadow: "0 0 15px rgba(255,75,43,0.6)"
                }}
              >
                <b>🔥 Super Users – ₹1000 (Recommended)</b>

                <ul style={{ fontSize: 13, marginTop: 5 }}>
                  <li>✔ Add to subscription channel</li>
                  <li>✔ First to see the content</li>
                  <li>✔ All media access allowed</li>
                  <li>⭐ Personal edits</li>
                  <li>⭐ Your own story-based edits</li>
                  <li>⭐ Downloadable content</li>
                </ul>

                <p style={{ fontSize: 11, marginTop: 5 }}>
                  ⚡ Most users choose this plan
                </p>
              </div>

            </div>

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

/* 🔥 Background */
const bg = {
  minHeight: "100vh",
  width: "100%",
  backgroundImage: "url('https://i.ibb.co/B51tRxHZ/image-49.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* 🔥 Overlay */
const overlay = {
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

/* 💎 Card */
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

/* 📦 Info Box */
const infoBox = {
  background: "rgba(255,255,255,0.1)",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "20px",
  fontSize: "13px",
  color: "#ddd"
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
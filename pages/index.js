import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    plan: "Super - ₹1000"
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

          {/* ⏳ Subscription Info */}
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

            {/* 🔥 PLAN SECTION */}
            <div style={{ marginBottom: 25 }}>

              <p style={{
                marginBottom: 12,
                color: "#ccc",
                fontSize: 14
              }}>
                Choose your plan:
              </p>

              {/* 🟢 NORMAL */}
              <div
                onClick={() =>
                  setForm({ ...form, plan: "Normal - ₹500" })
                }
                style={{
                  padding: "14px",
                  borderRadius: "14px",
                  marginBottom: "12px",
                  cursor: "pointer",
                  transition: "0.3s",

                  border: form.plan.includes("Normal")
                    ? "2px solid #00ffd5"
                    : "1px solid rgba(255,255,255,0.25)",

                  background: form.plan.includes("Normal")
                    ? "rgba(0,255,200,0.12)"
                    : "rgba(255,255,255,0.05)",

                  transform: form.plan.includes("Normal")
                    ? "scale(1.03)"
                    : "scale(1)",

                  boxShadow: form.plan.includes("Normal")
                    ? "0 0 20px rgba(0,255,200,0.6)"
                    : "none",

                  color: "#fff"
                }}
              >
                <b>Normal Users – ₹500</b>

                <ul style={{ fontSize: 12, marginTop: 6 }}>
                  <li>✔ Add to subscription channel</li>
                  <li>✔ First to see the content</li>
                  <li>✔ All media access allowed</li>
                </ul>
              </div>

              {/* 🔥 SUPER */}
              <div
                onClick={() =>
                  setForm({ ...form, plan: "Super - ₹1000" })
                }
                style={{
                  padding: "18px",
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "0.3s",

                  border: form.plan.includes("Super")
                    ? "2px solid gold"
                    : "1px solid rgba(255,255,255,0.25)",

                  background: form.plan.includes("Super")
                    ? "linear-gradient(135deg,#ff416c,#ff4b2b)"
                    : "rgba(255,255,255,0.05)",

                  transform: form.plan.includes("Super")
                    ? "scale(1.06)"
                    : "scale(1)",

                  boxShadow: form.plan.includes("Super")
                    ? "0 0 30px rgba(255,75,43,0.9)"
                    : "none",

                  color: "#fff",
                  position: "relative"
                }}
              >

                {/* ⭐ BADGE */}
                <div style={{
                  position: "absolute",
                  top: "-10px",
                  right: "10px",
                  background: "gold",
                  color: "#000",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "10px",
                  fontWeight: "bold"
                }}>
                  MOST POPULAR
                </div>

                <b style={{ fontSize: 16 }}>
                  🔥 Super Users – ₹1000
                </b>

                <ul style={{ fontSize: 13, marginTop: 8 }}>
                  <li>✔ Add to subscription channel</li>
                  <li>✔ First to see the content</li>
                  <li>✔ All media access allowed</li>
                  <li>⭐ Personal edits</li>
                  <li>⭐ Your own story-based edits</li>
                  <li>⭐ Downloadable content</li>
                </ul>

                <div style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: "#ffe"
                }}>
                  💰 Worth ₹2000 value for just ₹1000
                </div>

                <p style={{
                  fontSize: 11,
                  marginTop: 6,
                  opacity: 0.9
                }}>
                  ⚡ Most users upgrade to this plan
                </p>

              </div>

              {/* 🔥 URGENCY */}
              <p style={{
                marginTop: 10,
                fontSize: 11,
                color: "#ffd700"
              }}>
                🔥 Limited premium slots available
              </p>

            </div>

            {/* 🔘 BUTTON */}
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

/* 🎨 BACKGROUND */
const bg = {
  minHeight: "100vh",
  backgroundImage: "url('https://i.ibb.co/B51tRxHZ/image-49.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* 🌑 OVERLAY */
const overlay = {
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

/* 💎 CARD */
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

/* 📦 INFO */
const infoBox = {
  background: "rgba(255,255,255,0.1)",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "20px",
  fontSize: "13px",
};

/* ✏️ INPUT */
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

/* 🔘 BUTTON */
const btnStyle = {
  width: "100%",
  padding: "14px",
  background: "linear-gradient(45deg,#ff416c,#ff4b2b)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: 15,
  boxShadow: "0 0 20px rgba(255,75,43,0.8)"
};
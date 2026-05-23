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

          <h1 style={{
            fontSize: 42,
            marginBottom: 10,
            color: "#fff"
          }}>
            🔥 Premium Access
          </h1>

          <p style={{
            color: "#ddd",
            marginBottom: 20
          }}>
            Get instant access after payment
          </p>

          {/* DURATION */}
          <div style={durationBox}>
            ⏳ <b>2 Months Access</b>
            <br />
            🔁 Renewal required after expiry
          </div>

          <form onSubmit={submit}>

            <input
              placeholder="Enter your name"
              required
              style={inputStyle}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            <input
              placeholder="Enter your age"
              required
              style={inputStyle}
              onChange={(e) =>
                setForm({
                  ...form,
                  age: e.target.value
                })
              }
            />

            {/* 🔥 PLAN SECTION */}
            <div style={{ marginBottom: 25 }}>

              <p style={{
                marginBottom: 12,
                color: "#ccc",
                fontSize: 14
              }}>
                Premium Membership:
              </p>

              {/* NOTICE */}
              <div style={{
                background: "rgba(255,140,0,0.12)",
                border: "1px solid rgba(255,140,0,0.4)",
                padding: "12px",
                borderRadius: "12px",
                marginBottom: "15px",
                color: "#ffd27f",
                fontSize: 12,
                textAlign: "left"
              }}>
                ⚠️ Due to increasing AI generation & rendering costs,
                the ₹500 Normal Plan has been removed.

                <br /><br />

                To maintain premium quality and faster delivery,
                only Super Membership is available.
              </div>

              {/* SUPER PLAN */}
              <div
                onClick={() =>
                  setForm({
                    ...form,
                    plan: "Super - ₹1000"
                  })
                }
                style={{
                  padding: "20px",
                  borderRadius: "18px",
                  border: "2px solid gold",
                  background:
                    "linear-gradient(135deg,#ff416c,#ff4b2b)",
                  boxShadow:
                    "0 0 35px rgba(255,75,43,0.9)",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >

                <b style={{ fontSize: 24 }}>
                  🔥 Super Users – ₹1000
                </b>

                <ul style={{
                  textAlign: "left",
                  marginTop: 15,
                  lineHeight: 1.8,
                  fontSize: 14
                }}>
                  <li>✔ Premium subscription access</li>
                  <li>✔ First access to latest AI content</li>
                  <li>✔ All premium media access</li>
                  <li>⭐ Personal AI edits</li>
                  <li>⭐ Story-based custom edits</li>
                  <li>⭐ Downloadable premium content</li>
                  <li>⭐ Premium dashboard access</li>
                </ul>

                <p style={{
                  marginTop: 12,
                  fontSize: 12
                }}>
                  ⚡ Most users choose this plan
                </p>

              </div>

            </div>

            <button type="submit" style={btnStyle}>
              Continue →
            </button>

          </form>

          <p style={{
            fontSize: 11,
            color: "#ccc",
            marginTop: 15
          }}>
            🔒 Secure payment • Instant access
          </p>

        </div>

      </div>
    </div>
  );
}

/* STYLES */

const bg = {
  minHeight: "100vh",
  backgroundImage:
    "url('https://i.ibb.co/B51tRxHZ/image-49.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const overlay = {
  width: "100%",
  minHeight: "100vh",
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20
};

const card = {
  width: "100%",
  maxWidth: 420,
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  borderRadius: 20,
  padding: 25,
  textAlign: "center",
  boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
  fontSize: 14,
  outline: "none"
};

const btnStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background:
    "linear-gradient(45deg,#ff416c,#ff4b2b)",
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  cursor: "pointer"
};

const durationBox = {
  background: "rgba(255,255,255,0.08)",
  padding: 12,
  borderRadius: 12,
  marginBottom: 20,
  color: "#fff",
  fontSize: 14
};

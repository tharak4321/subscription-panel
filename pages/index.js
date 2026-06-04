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

          <h2 style={{ marginBottom: 10 }}>
            🔥 Premium Access
          </h2>

          <p style={{
            fontSize: 13,
            color: "#ccc",
            marginBottom: 12
          }}>
            Get instant access after payment
          </p>

          <div style={infoBox}>
            ⏳ <b>2 Months Access</b>
            <br />
            🔄 Renewal required after expiry
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

            <div style={{ marginBottom: 20 }}>

              <p style={{
                color: "#ccc",
                marginBottom: 12
              }}>
                Choose your plan:
              </p>

              <div style={noticeBox}>
                ⚠️ AI generation & rendering costs increased.
                <br /><br />
                Normal plan updated to ₹600.
              </div>

              {/* NORMAL */}
              <div
                onClick={() =>
                  setForm({
                    ...form,
                    plan: "Normal - ₹600"
                  })
                }
                style={{
                  ...planCard,
                  border:
                    form.plan === "Normal - ₹600"
                      ? "2px solid #00ffd5"
                      : "1px solid rgba(255,255,255,0.25)"
                }}
              >
                <b>Normal Users – ₹600</b>

                <ul style={listStyle}>
                  <li>✔ Add to subscription channel</li>
                  <li>✔ First access to content</li>
                  <li>✔ All media access allowed</li>
                </ul>
              </div>

              {/* SUPER */}
              <div
                onClick={() =>
                  setForm({
                    ...form,
                    plan: "Super - ₹1000"
                  })
                }
                style={{
                  ...superCard,
                  border:
                    form.plan === "Super - ₹1000"
                      ? "2px solid gold"
                      : "1px solid rgba(255,255,255,0.25)"
                }}
              >
                <b>🔥 Super Users – ₹1000</b>

                <ul style={listStyle}>
                  <li>✔ Premium subscription access</li>
                  <li>✔ First access to content</li>
                  <li>✔ All media access allowed</li>
                 
                  <li>⭐ Story-based edits</li>
                  <li>⭐ Downloadable content</li>
                </ul>
              </div>

            </div>

            <button type="submit" style={btnStyle}>
              Continue →
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

/* styles */

const bg = {
  minHeight: "100vh",
  backgroundImage:
    "url('https://i.ibb.co/Wv9ZMDn2/Google-Pay-QR-1.png')",
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
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  padding: 30,
  borderRadius: 15,
  width: "90%",
  maxWidth: 380,
  color: "#fff",
  textAlign: "center"
};

const infoBox = {
  background: "rgba(255,255,255,0.1)",
  padding: 10,
  borderRadius: 8,
  marginBottom: 20,
  fontSize: 13
};

const noticeBox = {
  background: "rgba(255,140,0,0.12)",
  padding: 12,
  borderRadius: 10,
  marginBottom: 12,
  fontSize: 12,
  color: "#ffd27f",
  textAlign: "left"
};

const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 12,
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "#fff"
};

const planCard = {
  padding: 15,
  borderRadius: 14,
  marginBottom: 12,
  background: "rgba(255,255,255,0.05)",
  cursor: "pointer"
};

const superCard = {
  padding: 18,
  borderRadius: 16,
  background:
    "linear-gradient(135deg,#ff416c,#ff4b2b)",
  cursor: "pointer"
};

const listStyle = {
  textAlign: "left",
  fontSize: 13,
  lineHeight: 1.8,
  marginTop: 8
};

const btnStyle = {
  width: "100%",
  padding: 14,
  background:
    "linear-gradient(45deg,#ff416c,#ff4b2b)",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontWeight: "bold",
  cursor: "pointer"
};

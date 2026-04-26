import { useState, useEffect } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const submit = async () => {
    if (!file) return alert("Please upload screenshot first");

    // 📅 Calculate dates
    const startDate = new Date();
    const nextPayment = new Date();
    nextPayment.setMonth(startDate.getMonth() + 2);

    const startStr = startDate.toLocaleDateString();
    const nextStr = nextPayment.toLocaleDateString();

    const formData = new FormData();
    formData.append("chat_id", "7657045982");
    formData.append("photo", file);

    formData.append(
      "caption",
`📥 New Subscription

👤 Name: ${user?.name}
🎂 Age: ${user?.age}
💰 Plan: ${user?.plan}

📅 Start: ${startStr}
📆 Next Payment: ${nextStr}

⏳ Duration: 2 Months

⚠️ Verify payment before approval`
    );

    setLoading(true);

    try {
      const res = await fetch(
        "https://api.telegram.org/bot8653348546:AAFb900FrkqzHwVk3R-wy7EN_6CXlO8pC9U/sendPhoto",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.ok) {
        setMessage(
`✅ Payment Submitted!

⏳ Subscription: 2 Months
📅 Starts Today
📆 Next Payment: ${nextStr}`
        );
      } else {
        alert("❌ Failed to send. Check bot token.");
      }
    } catch (err) {
      alert("❌ Error sending data.");
    }

    setLoading(false);
  };

  return (
    <div style={bg}>
      <div style={overlay}>
        <div style={card}>

          <h2>📤 Upload Payment Screenshot</h2>

          <p style={{ fontSize: 13, color: "#ccc" }}>
            ⏳ Subscription valid for <b>2 months</b>
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: 10 }}
          />

          <br /><br />

          <button style={btn} onClick={submit} disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* ✅ Confirmation + Telegram Contact */}
          {message && (
            <div style={{ marginTop: 20, color: "#0f0" }}>

              <p style={{ whiteSpace: "pre-line" }}>
                {message}
              </p>

              <p style={{ marginTop: 10, color: "#fff" }}>
                📩 To get access:
              </p>

              <p style={{ fontSize: 13 }}>
                👉 Send <b>"HI"</b> on Telegram<br/>
                OR send your <b>Telegram ID</b>
              </p>

              <a
                href="https://t.me/dragonbreath1?text=Hi%20I%20have%20completed%20payment"
                target="_blank"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  padding: "12px 20px",
                  background: "#0088cc",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                Open Telegram →
              </a>

            </div>
          )}

          <p style={{ marginTop: 15, fontSize: 12, color: "red" }}>
            ⚠️ Fake screenshots will be rejected
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

/* 🔘 Button */
const btn = {
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

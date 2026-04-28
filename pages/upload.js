import { useState, useEffect } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const submit = async () => {
    if (!file) {
      alert("Please upload screenshot first");
      return;
    }

    if (!agree) {
      alert("Please agree to terms before submitting");
      return;
    }

    const userId = "U" + Date.now();
    localStorage.setItem("userId", userId);

    const formData = new FormData();
    formData.append("chat_id", "7657045982");
    formData.append("photo", file);

    formData.append(
      "caption",
`📥 New Payment

🆔 ID: ${userId}

👤 Name: ${user?.name}
🎂 Age: ${user?.age}
💰 Plan: ${user?.plan}

⏰ Time: ${new Date().toLocaleString()}

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

🆔 Your ID: ${userId}

📩 Send "Hi + ID" on Telegram

⚠️ No refund will be provided`
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
            Upload your payment proof to continue
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: 10 }}
          />

          {/* ⚠️ FAKE WARNING */}
          <div style={tips}>
            ⚠️ Fake screenshots will be rejected  
            <br />
            • Do not edit or crop payment proof  
            • Ensure UPI ID & amount is visible  
            • Only real payments are accepted  
          </div>

          {/* ✅ AGREEMENT */}
          <div style={{ marginTop: 15, textAlign: "left" }}>
            <label style={{ fontSize: 13 }}>
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />{" "}
              I agree that payment is final and non-refundable
            </label>
          </div>

          <br />

          <button
            onClick={submit}
            style={{
              ...btn,
              opacity: agree ? 1 : 0.5,
              cursor: agree ? "pointer" : "not-allowed"
            }}
            disabled={!agree || loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* SUCCESS */}
          {message && (
            <div style={{ marginTop: 20, color: "#0f0" }}>
              <p style={{ whiteSpace: "pre-line" }}>{message}</p>

              <a
                href={`https://t.me/dragonbreath1?text=Hi%20My%20ID:%20${localStorage.getItem("userId")}`}
                target="_blank"
                style={telegramBtn}
              >
                Open Telegram →
              </a>
            </div>
          )}

          {/* NO REFUND */}
          <p style={warning}>
            ⚠️ All payments are final. No refund or cancellation allowed.
          </p>

        </div>
      </div>
    </div>
  );
}

/* 🎨 STYLES */

const bg = {
  minHeight: "100vh",
  backgroundImage: "url('https://i.ibb.co/B51tRxHZ/image-49.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay = {
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  padding: 25,
  borderRadius: 15,
  width: "90%",
  maxWidth: 350,
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
};

const btn = {
  width: "100%",
  padding: 12,
  background: "linear-gradient(45deg,#ff416c,#ff4b2b)",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontWeight: "bold"
};

const telegramBtn = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 20px",
  background: "#0088cc",
  color: "#fff",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: "bold"
};

const warning = {
  marginTop: 20,
  fontSize: 12,
  color: "#ff4b4b"
};

const tips = {
  marginTop: 15,
  fontSize: 12,
  color: "#ffcc00",
  textAlign: "left"
};

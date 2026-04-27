import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Super() {
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [userId, setUserId] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const plan = localStorage.getItem("plan");

    if (!auth || plan !== "super") {
      router.push("/login");
    }

    const uid = localStorage.getItem("userId");
    if (uid) setUserId(uid);
  }, []);

  const send = async () => {
    if (!file || !text) {
      alert("Upload image & enter request");
      return;
    }

    const formData = new FormData();
    formData.append("chat_id", "7657045982");
    formData.append("photo", file);

    formData.append(
      "caption",
`🎨 Edit Request

🆔 ${userId}

📝 ${text}`
    );

    await fetch(
      "https://api.telegram.org/bot8653348546:AAFb900FrkqzHwVk3R-wy7EN_6CXlO8pC9U/sendPhoto",
      { method: "POST", body: formData }
    );

    setSuccess(true);
    setFile(null);
    setText("");
  };

  return (
    <div style={bg}>
      <div style={overlay}>
        <div style={container}>

          {/* 🔥 HERO HEADER */}
          <div style={header}>
            <h2>🔥 Super Dashboard</h2>
            <p style={{ fontSize: 12, color: "#ccc" }}>
              Welcome {userId || "User"}
            </p>

            <span style={badge}>SUPER MEMBER</span>
          </div>

          {/* ⚡ QUICK ACTION */}
          <div style={section}>
            <h3>⚡ Quick Access</h3>

            <a
              href="https://t.me/+_kxniBLwvkJiZmE1"
              target="_blank"
              style={mainBtn}
            >
              📥 Open Telegram Channel
            </a>

            <p style={hint}>
              Join & access all premium content instantly
            </p>
          </div>

          {/* 🎨 EDIT REQUEST */}
          <div style={section}>
            <h3>🎨 Personal Edit Request</h3>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={input}
            />

            <textarea
              placeholder="Describe your edit (style, mood, effects...)"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={textarea}
            />

            <button onClick={send} style={mainBtn}>
              Send Request
            </button>

            {success && (
              <p style={{ color: "#00ffcc", marginTop: 10 }}>
                ✅ Request sent successfully!
              </p>
            )}
          </div>

          {/* 🚪 LOGOUT */}
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/login");
            }}
            style={logout}
          >
            Logout
          </button>

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
  backgroundPosition: "center"
};

const overlay = {
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const container = {
  width: "90%",
  maxWidth: 400,
  color: "#fff"
};

const header = {
  textAlign: "center",
  marginBottom: 20
};

const badge = {
  display: "inline-block",
  marginTop: 8,
  padding: "4px 10px",
  background: "gold",
  color: "#000",
  borderRadius: 20,
  fontSize: 10,
  fontWeight: "bold"
};

const section = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  padding: 15,
  borderRadius: 12,
  marginBottom: 15,
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
};

const mainBtn = {
  display: "block",
  width: "100%",
  padding: 12,
  marginTop: 10,
  background: "linear-gradient(45deg,#ff416c,#ff4b2b)",
  border: "none",
  borderRadius: 8,
  color: "#fff",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer"
};

const hint = {
  fontSize: 11,
  color: "#ccc",
  marginTop: 8
};

const input = {
  width: "100%",
  marginBottom: 10
};

const textarea = {
  width: "100%",
  height: 80,
  borderRadius: 8,
  padding: 10,
  marginBottom: 10
};

const logout = {
  width: "100%",
  padding: 10,
  background: "#222",
  border: "none",
  borderRadius: 8,
  color: "#fff",
  cursor: "pointer"
};

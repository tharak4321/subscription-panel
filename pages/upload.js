import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeUniqueId, TELEGRAM } from "../lib/brand";

export default function Upload() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) {
      router.replace("/");
      return;
    }
    setUser(JSON.parse(data));
  }, [router]);

  async function submit() {
    if (!file) {
      setError("Upload payment screenshot first.");
      return;
    }
    if (!agree) {
      setError("Please agree to the terms.");
      return;
    }

    const id = makeUniqueId();
    setUniqueId(id);
    localStorage.setItem("userId", id);
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("chat_id", TELEGRAM.chatId);
    formData.append("photo", file);
    formData.append(
      "caption",
      `📥 actorsparadise9 payment\n\n🆔 ${id}\n👤 ${user?.name || "-"}\n💰 ${user?.plan || "-"}\n⏰ ${new Date().toLocaleString()}\n\nVerify before approval`
    );

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM.botToken}/sendPhoto`,
        { method: "POST", body: formData }
      );
      const data = await res.json();
      if (!data.ok) {
        setError("Could not send screenshot. Try again.");
        setLoading(false);
        return;
      }
      setDone(true);
    } catch {
      setError("Network error. Try again.");
    }
    setLoading(false);
  }

  if (!user) {
    return <main style={page}>Loading…</main>;
  }

  const telegramUrl = `https://t.me/${TELEGRAM.username}?text=${encodeURIComponent(
    `Hi My ID: ${uniqueId || localStorage.getItem("userId") || ""}`
  )}`;

  return (
    <main style={page}>
      <div style={card}>
        <h1 style={{ marginTop: 0, fontSize: 22 }}>Upload screenshot</h1>
        <p style={{ color: "#c9b8b0", fontSize: 14 }}>
          {user.name} · {user.plan}
        </p>

        {!done ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ width: "100%", margin: "16px 0" }}
            />

            <div style={tips}>
              Fake or edited screenshots will be rejected. Keep UPI ID and amount visible.
            </div>

            <label style={{ display: "flex", gap: 8, fontSize: 13, textAlign: "left" }}>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              Payment is final and non-refundable
            </label>

            {error ? <p style={{ color: "#ff8a8a", fontSize: 13 }}>{error}</p> : null}

            <button
              type="button"
              onClick={submit}
              disabled={loading || !agree}
              style={{
                ...primaryBtn,
                marginTop: 14,
                opacity: agree ? 1 : 0.5,
                cursor: agree ? "pointer" : "not-allowed",
              }}
            >
              {loading ? "Sending…" : "Submit screenshot"}
            </button>
          </>
        ) : (
          <div style={{ marginTop: 12 }}>
            <p style={{ color: "#7dffa6" }}>Payment submitted</p>
            <p style={{ fontFamily: "ui-monospace, monospace" }}>ID: {uniqueId}</p>
            <a href={telegramUrl} target="_blank" rel="noreferrer" style={telegramBtn}>
              Take me to Telegram
            </a>
            <p style={{ fontSize: 12, color: "#c9b8b0" }}>
              Send your ID in chat so your pass can be activated.
            </p>
          </div>
        )}

        <Link href="/pay" style={{ display: "block", marginTop: 16, fontSize: 13, color: "#c9b8b0" }}>
          ← Back to payment
        </Link>
      </div>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: 16,
  background: "radial-gradient(900px 500px at 50% 0%, #3a1018 0%, #0b0809 60%)",
};

const card = {
  width: "100%",
  maxWidth: 380,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
  padding: 24,
  textAlign: "center",
};

const tips = {
  textAlign: "left",
  fontSize: 12,
  color: "#e8b86d",
  background: "rgba(232,184,109,0.08)",
  borderRadius: 10,
  padding: 12,
  marginBottom: 14,
};

const primaryBtn = {
  width: "100%",
  padding: 14,
  border: "none",
  borderRadius: 12,
  background: "linear-gradient(90deg,#c42b4a,#8b1e35)",
  color: "#fff",
  fontWeight: 700,
};

const telegramBtn = {
  display: "inline-block",
  marginTop: 12,
  padding: "12px 18px",
  borderRadius: 12,
  background: "#0088cc",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
};

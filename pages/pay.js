import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { APP_NAME, DEFAULT_UPI } from "../lib/brand";

export default function Pay() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState(DEFAULT_UPI);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) {
      router.replace("/");
      return;
    }
    setUser(JSON.parse(data));
    fetch("/api/settings")
      .then((r) => r.json())
      .then((s) =>
        setSettings({
          id: s.upiId || DEFAULT_UPI.id,
          name: s.upiName || DEFAULT_UPI.name,
          qrSrc: s.qrSrc || DEFAULT_UPI.qrSrc,
        })
      )
      .catch(() => {});
  }, [router]);

  if (!user) {
    return <main style={page}>Loading…</main>;
  }

  const amount = user.price || 1000;
  const upiLink = `upi://pay?pa=${encodeURIComponent(settings.id)}&pn=${encodeURIComponent(
    settings.name
  )}&am=${amount}&cu=INR&tn=${encodeURIComponent(APP_NAME)}`;

  return (
    <main style={page}>
      <div style={card}>
        <div style={{ fontSize: 12, color: "#c42b4a", letterSpacing: 1 }}>PAYMENT</div>
        <h1 style={{ margin: "8px 0 4px", fontSize: 24 }}>Pay with UPI</h1>
        <p style={{ margin: 0, color: "#c9b8b0", fontSize: 14 }}>
          {user.name} · {user.plan}
        </p>

        <img
          src={settings.qrSrc}
          alt="UPI QR"
          width={220}
          height={220}
          style={{
            margin: "18px auto",
            display: "block",
            borderRadius: 12,
            background: "#fff",
            objectFit: "contain",
          }}
        />

        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#c9b8b0" }}>Payee</p>
        <p style={{ margin: "0 0 12px", fontWeight: 600 }}>{settings.name}</p>

        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#c9b8b0" }}>UPI ID</p>
        <p
          style={{
            margin: "0 0 16px",
            fontFamily: "ui-monospace, monospace",
            fontSize: 14,
            wordBreak: "break-all",
          }}
        >
          {settings.id}
        </p>

        <a href={upiLink} style={primaryBtn}>
          Open UPI app · ₹{amount}
        </a>

        <p style={{ fontSize: 12, color: "#ff8a8a", marginTop: 14 }}>
          Pay the exact amount, then upload your screenshot.
        </p>

        <button type="button" style={secondaryBtn} onClick={() => router.push("/upload")}>
          I have paid → Upload screenshot
        </button>

        <Link href="/" style={{ display: "block", marginTop: 14, fontSize: 13, color: "#c9b8b0" }}>
          ← Back to plans
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

const primaryBtn = {
  display: "block",
  width: "100%",
  padding: 14,
  borderRadius: 12,
  background: "linear-gradient(90deg,#c42b4a,#8b1e35)",
  color: "#fff",
  fontWeight: 700,
  textDecoration: "none",
};

const secondaryBtn = {
  width: "100%",
  marginTop: 10,
  padding: 14,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "transparent",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

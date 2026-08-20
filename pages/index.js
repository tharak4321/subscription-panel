import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { APP_NAME, PLANS } from "../lib/brand";

const AGE_KEY = "ap9_age_ok";

export default function Home() {
  const router = useRouter();
  const [ageOk, setAgeOk] = useState(false);
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [plan, setPlan] = useState("super");

  useEffect(() => {
    setAgeOk(localStorage.getItem(AGE_KEY) === "1");
    setReady(true);
  }, []);

  function confirmAge() {
    localStorage.setItem(AGE_KEY, "1");
    setAgeOk(true);
  }

  function continuePay(e) {
    e.preventDefault();
    const selected = PLANS.find((p) => p.key === plan) || PLANS[1];
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name.trim(),
        plan: `${selected.label} - ₹${selected.price}`,
        planKey: selected.key,
        price: selected.price,
      })
    );
    router.push("/pay");
  }

  if (!ready) {
    return <main style={page}>Loading…</main>;
  }

  return (
    <main style={page}>
      {!ageOk && (
        <div style={gate}>
          <div style={gateCard}>
            <div style={badge}>18+ ONLY</div>
            <h1 style={{ margin: "12px 0 8px", fontSize: 28 }}>{APP_NAME}</h1>
            <p style={{ color: "#c9b8b0", fontSize: 14, lineHeight: 1.5 }}>
              This membership is for adult AI videos. You must be 18 or older to continue.
            </p>
            <button type="button" style={primaryBtn} onClick={confirmAge}>
              I am 18 or older
            </button>
          </div>
        </div>
      )}

      <header style={header}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: 2, color: "#c42b4a" }}>18+ PASS</div>
          <strong>{APP_NAME}</strong>
        </div>
        <Link href="/admin" style={{ fontSize: 13, color: "#c9b8b0" }}>
          Sign in
        </Link>
      </header>

      <section style={hero}>
        <h1 style={{ fontSize: 32, margin: "0 0 10px", lineHeight: 1.15 }}>
          Adult AI video membership
        </h1>
        <p style={{ color: "#c9b8b0", margin: 0, fontSize: 15 }}>
          Choose a plan, pay by UPI, upload proof, then open Telegram with your unique ID.
        </p>
      </section>

      <form onSubmit={continuePay} style={{ maxWidth: 440, margin: "0 auto", padding: 16 }}>
        <label style={label}>
          Your name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={input}
          />
        </label>

        <p style={{ ...label, marginTop: 18 }}>Choose plan · 2 months</p>

        {PLANS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setPlan(p.key)}
            style={{
              ...planCard,
              border:
                plan === p.key
                  ? p.key === "super"
                    ? "2px solid #e8b86d"
                    : "2px solid #c42b4a"
                  : "1px solid rgba(255,255,255,0.12)",
              background:
                p.key === "super"
                  ? "linear-gradient(145deg,#4a1524,#1a0c10)"
                  : "rgba(255,255,255,0.04)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <strong>{p.label}</strong>
              <strong>₹{p.price}</strong>
            </div>
            <ul style={list}>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </button>
        ))}

        <button type="submit" style={{ ...primaryBtn, marginTop: 8 }}>
          Continue to payment
        </button>
      </form>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(1200px 600px at 50% -10%, #3a1018 0%, #0b0809 55%)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const hero = {
  maxWidth: 440,
  margin: "0 auto",
  padding: "28px 16px 8px",
};

const label = {
  display: "block",
  fontSize: 13,
  color: "#c9b8b0",
  marginBottom: 8,
};

const input = {
  width: "100%",
  marginTop: 8,
  padding: "14px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.35)",
  color: "#fff",
};

const planCard = {
  width: "100%",
  textAlign: "left",
  color: "#fff",
  padding: 16,
  borderRadius: 16,
  marginBottom: 12,
  cursor: "pointer",
};

const list = {
  margin: "10px 0 0",
  paddingLeft: 18,
  fontSize: 13,
  color: "#d8c8c0",
  lineHeight: 1.7,
};

const primaryBtn = {
  width: "100%",
  padding: 14,
  border: "none",
  borderRadius: 12,
  background: "linear-gradient(90deg,#c42b4a,#8b1e35)",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
};

const gate = {
  position: "fixed",
  inset: 0,
  zIndex: 50,
  background: "rgba(0,0,0,0.92)",
  display: "grid",
  placeItems: "center",
  padding: 20,
};

const gateCard = {
  maxWidth: 360,
  width: "100%",
  textAlign: "center",
  background: "#140c0e",
  border: "1px solid rgba(196,43,74,0.35)",
  borderRadius: 20,
  padding: 28,
};

const badge = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(196,43,74,0.2)",
  color: "#ff6b8a",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 1,
};

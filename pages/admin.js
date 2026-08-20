import { useEffect, useState } from "react";
import Link from "next/link";
import { ADMIN, DEFAULT_UPI } from "../lib/brand";

const AUTH_KEY = "ap9_admin";

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [upiId, setUpiId] = useState(DEFAULT_UPI.id);
  const [upiName, setUpiName] = useState(DEFAULT_UPI.name);
  const [qrSrc, setQrSrc] = useState(DEFAULT_UPI.qrSrc);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setAuthed(localStorage.getItem(AUTH_KEY) === "1");
    setReady(true);
    fetch("/api/settings")
      .then((r) => r.json())
      .then((s) => {
        if (s.upiId) setUpiId(s.upiId);
        if (s.upiName) setUpiName(s.upiName);
        if (s.qrSrc) setQrSrc(s.qrSrc);
      })
      .catch(() => {});
  }, []);

  async function login(e) {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      });
      const data = await res.json();
      if (!data.success) {
        setLoginError("Wrong admin ID or password.");
        return;
      }
      localStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
    } catch {
      setLoginError("Could not sign in.");
    }
  }

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adminOk: true,
          upiId,
          upiName,
          qrSrc,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Save failed");
      } else {
        setMessage("Payment details saved.");
        setUpiId(data.upiId);
        setUpiName(data.upiName);
        setQrSrc(data.qrSrc);
      }
    } catch {
      setMessage("Save failed.");
    }
    setSaving(false);
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  }

  if (!ready) {
    return <main style={page}>Loading…</main>;
  }

  if (!authed) {
    return (
      <main style={page}>
        <form onSubmit={login} style={card}>
          <h1 style={{ marginTop: 0, fontSize: 22 }}>Owner sign in</h1>
          <p style={{ color: "#c9b8b0", fontSize: 14 }}>
            Admin ID <strong style={{ color: "#fff" }}>{ADMIN.id}</strong>
          </p>
          <label style={label}>
            Admin ID
            <input value={id} onChange={(e) => setId(e.target.value)} style={input} required />
          </label>
          <label style={label}>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={input}
              required
            />
          </label>
          {loginError ? <p style={{ color: "#ff8a8a", fontSize: 13 }}>{loginError}</p> : null}
          <button type="submit" style={primaryBtn}>
            Sign in
          </button>
          <Link href="/" style={{ display: "block", marginTop: 14, fontSize: 13, color: "#c9b8b0" }}>
            ← Back to plans
          </Link>
        </form>
      </main>
    );
  }

  return (
    <main style={page}>
      <form onSubmit={save} style={card}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <h1 style={{ margin: 0, fontSize: 22 }}>Payment details</h1>
          <button type="button" onClick={logout} style={ghostBtn}>
            Sign out
          </button>
        </div>
        <p style={{ color: "#c9b8b0", fontSize: 13 }}>
          Members see the latest UPI ID and QR on the pay page.
        </p>

        <label style={label}>
          Payee name
          <input value={upiName} onChange={(e) => setUpiName(e.target.value)} style={input} required />
        </label>
        <label style={label}>
          UPI ID
          <input value={upiId} onChange={(e) => setUpiId(e.target.value)} style={input} required />
        </label>
        <label style={label}>
          QR image URL
          <input value={qrSrc} onChange={(e) => setQrSrc(e.target.value)} style={input} required />
        </label>

        {qrSrc ? (
          <img
            src={qrSrc}
            alt="QR preview"
            width={180}
            height={180}
            style={{ margin: "8px auto", display: "block", borderRadius: 12, background: "#fff" }}
          />
        ) : null}

        {message ? <p style={{ color: "#7dffa6", fontSize: 13 }}>{message}</p> : null}

        <button type="submit" style={primaryBtn} disabled={saving}>
          {saving ? "Saving…" : "Save payment details"}
        </button>
        <Link href="/" style={{ display: "block", marginTop: 14, fontSize: 13, color: "#c9b8b0" }}>
          ← Back to plans
        </Link>
      </form>
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
  maxWidth: 400,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
  padding: 24,
};

const label = {
  display: "block",
  fontSize: 13,
  color: "#c9b8b0",
  marginTop: 12,
};

const input = {
  width: "100%",
  marginTop: 8,
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.35)",
  color: "#fff",
};

const primaryBtn = {
  width: "100%",
  marginTop: 16,
  padding: 14,
  border: "none",
  borderRadius: 12,
  background: "linear-gradient(90deg,#c42b4a,#8b1e35)",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
};

const ghostBtn = {
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "#c9b8b0",
  borderRadius: 8,
  padding: "6px 10px",
  cursor: "pointer",
  fontSize: 12,
};

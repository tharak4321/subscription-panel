
{/* 🔥 PLAN SECTION */}
<div style={{ marginBottom: 25 }}>

  <p style={{
    marginBottom: 12,
    color: "#ccc",
    fontSize: 14
  }}>
    Choose your plan:
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
    ⚠️ AI generation & rendering costs have increased.

    <br /><br />

    To maintain quality and faster delivery,
    the Normal Plan has been updated to ₹600.
  </div>

  {/* NORMAL */}
  <div
    onClick={() =>
      setForm({ ...form, plan: "Normal - ₹600" })
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
    <b>Normal Users – ₹600</b>

    <ul style={{
      fontSize: 12,
      marginTop: 8,
      textAlign: "left",
      lineHeight: 1.8
    }}>
      <li>✔ Add to subscription channel</li>
      <li>✔ First access to content</li>
      <li>✔ All media access allowed</li>
    </ul>
  </div>

  {/* SUPER */}
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
        ? "scale(1.05)"
        : "scale(1)",

      boxShadow: form.plan.includes("Super")
        ? "0 0 30px rgba(255,75,43,0.9)"
        : "none",

      color: "#fff",
      position: "relative"
    }}
  >

    {/* BADGE */}
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

    <ul style={{
      fontSize: 13,
      marginTop: 8,
      textAlign: "left",
      lineHeight: 1.8
    }}>
      <li>✔ Add to subscription channel</li>
      <li>✔ First access to content</li>
      <li>✔ All media access allowed</li>
      <li>⭐ Story-based edits</li>
      <li>⭐ Downloadable content</li>
      <li>⭐ Premium dashboard access</li>
    </ul>

    <p style={{
      fontSize: 11,
      marginTop: 8,
      color: "#ffe"
    }}>
      ⚡ Best value • Most users choose this
    </p>

  </div>

</div>

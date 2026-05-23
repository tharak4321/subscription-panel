{/* 🔥 PLAN SECTION */}
<div style={{ marginBottom: 25 }}>

  <p style={{
    marginBottom: 12,
    color: "#ccc",
    fontSize: 14
  }}>
    Premium Membership:
  </p>

  {/* ⚠️ NOTICE */}
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

    To maintain high-quality content, fast delivery, 
    and premium AI edits, only the Super Membership is available.
  </div>

  {/* 🔥 SUPER */}
  <div
    onClick={() =>
      setForm({ ...form, plan: "Super - ₹1000" })
    }
    style={{
      padding: "20px",
      borderRadius: "18px",
      cursor: "pointer",
      transition: "0.3s",

      border: "2px solid gold",

      background:
        "linear-gradient(135deg,#ff416c,#ff4b2b)",

      transform: "scale(1.04)",

      boxShadow:
        "0 0 35px rgba(255,75,43,0.9)",

      color: "#fff",
      position: "relative"
    }}
  >

    {/* ⭐ BADGE */}
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
      PREMIUM ACCESS
    </div>

    <b style={{ fontSize: 18 }}>
      🔥 Super Users – ₹1000
    </b>

    <ul style={{
      fontSize: 13,
      marginTop: 10,
      textAlign: "left",
      lineHeight: 1.8
    }}>
      <li>✔ Add to premium subscription channel</li>
      <li>✔ First access to latest AI content</li>
      <li>✔ All premium media access</li>
      <li>⭐ Personal AI edits</li>
      <li>⭐ Story-based custom edits</li>
      <li>⭐ Downloadable premium content</li>
      <li>⭐ Premium dashboard access</li>
      <li>⭐ Direct Telegram delivery system</li>
    </ul>

    <div style={{
      marginTop: 10,
      fontSize: 12,
      color: "#ffe"
    }}>
      💰 Premium value worth ₹2000+
    </div>

    <p style={{
      fontSize: 11,
      marginTop: 6,
      opacity: 0.9
    }}>
      ⚡ Best experience • Most users choose this
    </p>

  </div>

  {/* 🔥 URGENCY */}
  <p style={{
    marginTop: 12,
    fontSize: 11,
    color: "#ffd700"
  }}>
    🔥 Limited premium slots available
  </p>

</div>

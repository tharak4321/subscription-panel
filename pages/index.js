<div style={{ marginBottom: 20 }}>

  <p style={{ marginBottom: 10, color: "#ccc" }}>
    Choose your plan:
  </p>

  {/* 🔘 NORMAL PLAN */}
  <div
    onClick={() => setForm({ ...form, plan: "Normal - ₹500" })}
    style={{
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "10px",
      cursor: "pointer",
      border: form.plan.includes("Normal") ? "2px solid #fff" : "1px solid #555",
      background: "rgba(255,255,255,0.05)",
      color: "#ddd"
    }}
  >
    <b>Normal Users – ₹500</b>
    <ul style={{ fontSize: 12, marginTop: 5 }}>
      <li>✔ Add to subscription channel</li>
      <li>✔ First to see the content</li>
      <li>✔ All media access allowed</li>
    </ul>
  </div>

  {/* ⭐ SUPER PLAN */}
  <div
    onClick={() => setForm({ ...form, plan: "Super - ₹1000" })}
    style={{
      padding: "15px",
      borderRadius: "12px",
      cursor: "pointer",
      border: form.plan.includes("Super") ? "2px solid gold" : "2px solid #ff4b2b",
      background: "linear-gradient(45deg,#ff416c,#ff4b2b)",
      color: "#fff",
      boxShadow: "0 0 15px rgba(255,75,43,0.6)"
    }}
  >
    <b>🔥 Super Users – ₹1000 (Recommended)</b>

    <ul style={{ fontSize: 13, marginTop: 5 }}>
      <li>✔ Add to subscription channel</li>
      <li>✔ First to see the content</li>
      <li>✔ All media access allowed</li>
      <li>⭐ Personal edits</li>
      <li>⭐ Your own story-based edits</li>
      <li>⭐ Downloadable content</li>
    </ul>

    <p style={{ fontSize: 11, marginTop: 5 }}>
      ⚡ Most users choose this plan
    </p>
  </div>

</div>
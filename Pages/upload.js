import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!file) {
      alert("Please upload a screenshot first");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("User data missing. Please restart from form.");
      return;
    }

    const formData = new FormData();
    formData.append("chat_id", "7657045982"); // your chat ID
    formData.append("photo", file);
    formData.append(
      "caption",
      `📥 New Payment Received

👤 Name: ${user.name}
🎂 Age: ${user.age}
💰 Plan: ${user.plan}
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
        alert("✅ Submitted successfully! Wait for approval.");
      } else {
        console.error(data);
        alert("❌ Failed to send. Check bot token.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error sending data.");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Upload Payment Screenshot</h2>

      <p style={{ fontSize: 14, color: "gray" }}>
        After payment, upload your screenshot below
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button
        onClick={submit}
        disabled={loading}
        style={{
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      <p style={{ marginTop: 20, fontSize: 12, color: "red" }}>
        ⚠️ Fake screenshots will be rejected
      </p>
    </div>
  );
}

import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!file) return alert("Upload screenshot first");

    const user = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData();
    formData.append("chat_id", "7657045982");
    formData.append("photo", file);
    formData.append(
      "caption",
      `📥 New Payment

👤 Name: ${user?.name}
🎂 Age: ${user?.age}
💰 Plan: ${user?.plan}
⏰ Time: ${new Date().toLocaleString()}`
    );

    setLoading(true);

    try {
      const res = await fetch(
        "https://api.telegram.org/8653348546:AAFb900FrkqzHwVk3R-wy7EN_6CXlO8pC9U/sendPhoto",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.ok) {
        alert("✅ Submitted! Check Telegram.");
      } else {
        alert("❌ Failed to send");
        console.log(data);
      }
    } catch (err) {
      alert("❌ Error sending");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Upload Payment Screenshot</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <br /><br />
      <button onClick={submit} disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
    </div>
  );
}

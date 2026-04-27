import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Super() {
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const plan = localStorage.getItem("plan");

    if (!auth || plan !== "super") {
      router.push("/login");
    }
  }, []);

  const send = async () => {
    if (!file || !text) {
      alert("Upload image & enter request");
      return;
    }

    const formData = new FormData();
    formData.append("chat_id", "7657045982");
    formData.append("photo", file);
    formData.append("caption", `🎨 Edit Request:\n${text}`);

    await fetch(
      "https://api.telegram.org/bot8653348546:AAFb900FrkqzHwVk3R-wy7EN_6CXlO8pC9U/sendPhoto",
      { method: "POST", body: formData }
    );

    alert("✅ Request sent!");
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h2>🔥 Super Panel</h2>

      {/* 📦 CONTENT */}
      <a
        href="https://t.me/+_kxniBLwvkJiZmE1"
        target="_blank"
      >
        📥 Open Premium Content
      </a>

      <hr />

      {/* 🎨 EDIT REQUEST */}
      <h3>Request Personal Edit</h3>

      <input type="file"
        onChange={(e)=>setFile(e.target.files[0])}/>
      <br /><br />

      <textarea
        placeholder="Describe your edit..."
        onChange={(e)=>setText(e.target.value)}
      />

      <br /><br />

      <button onClick={send}>Send Request</button>

      <br /><br />

      {/* 🚪 LOGOUT */}
      <button onClick={()=>{
        localStorage.clear();
        router.push("/login");
      }}>
        Logout
      </button>
    </div>
  );
        }

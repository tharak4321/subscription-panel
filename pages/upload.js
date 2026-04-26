import { useState, useEffect } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const submit = async () => {
    if (!file) return alert("Upload screenshot");

    const formData = new FormData();
    formData.append("chat_id", "7657045982");
    formData.append("photo", file);
    formData.append("caption",
`📥 Payment
👤 ${user?.name}
💰 ${user?.plan}
⏰ ${new Date().toLocaleString()}`);

    setLoading(true);

    await fetch(
      "https://api.telegram.org/bot8653348546:AAFb900FrkqzHwVk3R-wy7EN_6CXlO8pC9U/sendPhoto",
      { method:"POST", body:formData }
    );

    alert("✅ Submitted!");
    setLoading(false);
  };

  return (
    <div style={bg}>
      <div style={card}>
        <h2>📤 Upload Screenshot</h2>

        <input type="file" onChange={(e)=>setFile(e.target.files[0])} />

        <button style={btn} onClick={submit}>
          {loading ? "Sending..." : "Submit"}
        </button>

        <p style={{color:"red", fontSize:12}}>
          ⚠️ Fake screenshots rejected
        </p>
      </div>
    </div>
  );
}

const bg = {
  minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center",
  background:"linear-gradient(135deg,#0f2027,#2c5364)"
};

const card = {
  background:"#fff", padding:30, borderRadius:15,
  textAlign:"center", width:"90%", maxWidth:350,
  boxShadow:"0 10px 30px rgba(0,0,0,0.3)"
};

const btn = {
  marginTop:15, padding:12, width:"100%",
  background:"#000", color:"#fff",
  border:"none", borderRadius:8, cursor:"pointer"
};

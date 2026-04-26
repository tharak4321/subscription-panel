import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pay() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  return (
    <div style={bg}>
      <div style={card}>
        <h2>💳 Complete Payment</h2>

        {user && (
          <>
            <p><b>{user.name}</b></p>
            <p>{user.plan}</p>
          </>
        )}

        <img
          src="https://i.ibb.co/hhMLNYk/IMG-20251114-100022-427.jpg"
          width="220"
          style={{borderRadius:10, margin:10}}
        />

        <p style={{fontSize:13}}>
          Scan using GPay / PhonePe
        </p>

        <p style={{color:"red", fontSize:12}}>
          ⚠️ Pay exact amount
        </p>

        <button style={btn} onClick={()=>router.push("/upload")}>
          I HAVE PAID →
        </button>
      </div>
    </div>
  );
}

const bg = {
  minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center",
  background:"linear-gradient(135deg,#1d2671,#c33764)"
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

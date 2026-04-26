import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pay() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Complete Payment</h2>

      {user && (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Plan:</b> {user.plan}</p>
        </>
      )}

      <h3>Scan QR & Pay</h3>

      {/* 🔥 YOUR QR CODE */}
      <img
        src="https://i.ibb.co/hhMLNYk/IMG-20251114-100022-427.jpg"
        width="250"
        style={{ borderRadius: "10px" }}
      />

      <p style={{ marginTop: 10 }}>
        Pay using Google Pay / PhonePe
      </p>

      <p style={{ color: "red", fontSize: 13 }}>
        ⚠️ Pay exact amount or request will be rejected
      </p>

      <br />

      <button
        onClick={() => router.push("/upload")}
        style={{
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        I HAVE PAID
      </button>
    </div>
  );
}

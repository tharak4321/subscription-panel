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

      <img
        src="https://i.ibb.co/hhMLNYk/IMG-20251114-100022-427.jpg"
        width="250"
      />

      <p>Scan and pay using Google Pay / PhonePe</p>

      <button onClick={() => router.push("/upload")}>
        I HAVE PAID
      </button>
    </div>
  );
}

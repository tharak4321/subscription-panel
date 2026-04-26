import { useRouter } from "next/router";

export default function Pay() {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Complete Payment</h2>

      <p>Name: {user?.name}</p>
      <p>Plan: {user?.plan}</p>

      <img src="/qr.png" width="250" />

      <p>Scan using Google Pay / PhonePe</p>

      <button onClick={()=>router.push("/upload")}>
        I HAVE PAID
      </button>
    </div>
  );
}

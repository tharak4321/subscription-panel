import { useRouter } from "next/router";

export default function Pay() {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Complete Payment</h2>

      <p><b>Name:</b> {user?.name}</p>
      <p><b>Plan:</b> {user?.plan}</p>

      <h3>Scan & Pay</h3>

      <img
        src="https://i.ibb.co/hhMLNYk/IMG-20251114-100022-427.jpg"
        alt="QR Code"
        width="250"
        style={{ borderRadius: "10px" }}
      />

      <p style={{ marginTop: 10 }}>
        Use Google Pay / PhonePe to scan and complete payment
      </p>

      <br />

      <button onClick={() => router.push("/upload")}>
        I HAVE PAID
      </button>
    </div>
  );
}

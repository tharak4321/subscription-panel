import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/admin");
  }, [router]);
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>Redirecting…</main>;
}

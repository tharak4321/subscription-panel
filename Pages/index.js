import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", plan: "Normal" });

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    router.push("/pay");
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Premium Subscription</h2>

      <form onSubmit={submit}>
        <input placeholder="Name" required
          onChange={(e)=>setForm({...form,name:e.target.value})} />
        <br /><br />

        <input placeholder="Age" required
          onChange={(e)=>setForm({...form,age:e.target.value})} />
        <br /><br />

        <select onChange={(e)=>setForm({...form,plan:e.target.value})}>
          <option>Normal - ₹500</option>
          <option>Super - ₹1000 ⭐</option>
        </select>

        <br /><br />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

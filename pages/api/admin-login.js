import { ADMIN } from "../../lib/brand";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { id, password } = req.body || {};
  const ok =
    String(id || "").trim().toLowerCase() === ADMIN.id.toLowerCase() &&
    String(password || "") === ADMIN.password;

  if (!ok) {
    return res.status(401).json({ success: false });
  }

  return res.status(200).json({ success: true });
}

import { DEFAULT_UPI } from "../../lib/brand";

const globalRef = globalThis;

function getStore() {
  if (!globalRef.__apSettings) {
    globalRef.__apSettings = {
      upiId: DEFAULT_UPI.id,
      upiName: DEFAULT_UPI.name,
      qrSrc: DEFAULT_UPI.qrSrc,
    };
  }
  return globalRef.__apSettings;
}

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(getStore());
  }

  if (req.method === "POST") {
    const { adminOk, upiId, upiName, qrSrc } = req.body || {};
    if (!adminOk) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const store = getStore();
    if (typeof upiId === "string" && upiId.trim()) {
      store.upiId = upiId.trim().toLowerCase();
    }
    if (typeof upiName === "string" && upiName.trim()) {
      store.upiName = upiName.trim();
    }
    if (typeof qrSrc === "string" && qrSrc.trim()) {
      store.qrSrc = qrSrc.trim();
    }
    return res.status(200).json(store);
  }

  return res.status(405).json({ error: "Method not allowed" });
}

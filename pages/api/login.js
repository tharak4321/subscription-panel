export default function handler(req, res) {
  const { id, pass } = req.body;

  // 🔒 Users list (ADD HERE)
  const users = [
    {
      id: "tharak",
      pass: "9449",
      plan: "super"
    },
    {
      id: "user1",
      pass: "1234",
      plan: "super"
    }
  ];

  // 🔍 Find user (case-insensitive ID)
  const user = users.find(
    (u) =>
      u.id.toLowerCase() === id.toLowerCase() &&
      u.pass === pass
  );

  // ❌ Invalid
  if (!user) {
    return res.status(401).json({ success: false });
  }

  // ✅ Success
  res.status(200).json({
    success: true,
    plan: user.plan
  });
}

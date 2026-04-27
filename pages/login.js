export default function handler(req, res) {
  const { id, pass } = req.body;

  // 🔒 User list (edit here anytime)
  const users = [
    {
      id: "user1",
      pass: "1234",
      plan: "super"
    },
    {
      id: "tharak",   
      pass: "9449",
      plan: "super"
    }
  ];

  // 🔍 Find user
  const user = users.find(
    (u) => u.id === id && u.pass === pass
  );

  // ❌ Invalid login
  if (!user) {
    return res.status(401).json({ success: false });
  }

  // ✅ Success
  res.status(200).json({
    success: true,
    plan: user.plan
  });
}

export default function handler(req, res) {
  const { id, pass } = req.body;

  const users = [
    {
      id: "manoj",
      pass: "1234",
      plan: "super"
    },
    {
      id: "user2",
      pass: "5678",
      plan: "super"
    }
  ];

  const user = users.find(
    (u) => u.id === id && u.pass === pass
  );

  if (!user) {
    return res.status(401).json({ success: false });
  }

  res.status(200).json({
    success: true,
    plan: user.plan
  });
}

export default async function handler(req, res) {
  const { code = "86.10.Z" } = req.query;
  try {
    const response = await fetch(`https://rejestr.io/api/search?q=pkd:${code}`, {
      headers: {
        "Authorization": "Token aa14ca34-4e65-432d-ae79-b1c7f87ab029"
      }
    });
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from rejestr.io" });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}

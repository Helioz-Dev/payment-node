import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const API_URL = "https://paymoz.tech/api/v1/pagamentos/processar/";
const API_KEY = process.env.API_KEY; // variável segura no Render

app.post("/payments", async (req, res) => {
  try {
    const resp = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `ApiKey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await resp.json();
    res.status(resp.status).json(data);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
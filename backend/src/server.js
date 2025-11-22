import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Verbindung
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("🔥 MongoDB connected!"))
  .catch((err) => console.error("❌ Fehler bei MongoDB:", err));

app.get("/", (req, res) => {
  res.send("UFC Backend läuft!");
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server läuft auf Port ${process.env.PORT}`);
});

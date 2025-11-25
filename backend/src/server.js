import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/fighterRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

// MongoDB Verbindung
mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server läuft auf Port ${PORT}`);
    })
  )
  .catch((err) => console.error("Fehler bei MongoDB:", err));

app.use("/fighters", userRoutes);

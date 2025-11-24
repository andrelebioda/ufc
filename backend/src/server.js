import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/fighterRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// MongoDB Verbindung
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("Fehler bei MongoDB:", err));

app.use("/fighters", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server läuft auf Port ${process.env.PORT}`);
});
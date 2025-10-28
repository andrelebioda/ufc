import express from "express";

const app = express();
const PORT = 5000;

app.get("   /", (req, res) => {
    res.send("Server läuft erfolgreich");
});
t
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
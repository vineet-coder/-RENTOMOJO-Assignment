const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "assets");
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(publicPath));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/gamesext", (req,res) => {
    res.sendFile(path.join(__dirname, "gamesext.json"))
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
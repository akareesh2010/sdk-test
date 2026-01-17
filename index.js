const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from root folder
app.use(express.static(__dirname));

// Home page → load your SDK page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "webRTC.html"));
});

// Health check (Render requirement)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

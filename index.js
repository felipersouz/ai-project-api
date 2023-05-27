const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Defina outras rotas e lógica da API aqui

module.exports = app;

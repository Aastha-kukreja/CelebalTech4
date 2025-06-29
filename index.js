// server.js
const express = require("express");
const app = express();
const port = 4000;

// Middleware example
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Base route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Routes
app.get("/api/v1/home", (req, res) => {
  res.send("This is Home Page");
});

app.get("/api/v1/about", (req, res) => {
  res.send("This is About Page");
});

app.get("/api/v1/contact", (req, res) => {
  res.send("This is Contact Page");
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

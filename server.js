// server.js

// Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Core dependencies
const express = require("express");
const cors = require("cors");

// Database connection
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/auth.routes");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use("/api/auth", authRoutes); // Auth endpoints

// Root route (for health check)
app.get("/", (req, res) => {
  res.send("✅ CEX Backend is running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

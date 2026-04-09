import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
dotenv.config();

const app = express();

/// Connect MongoDB
connectDB();
/// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
/// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

/// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
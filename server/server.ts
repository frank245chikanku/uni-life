import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRouter from "./routes/aiRouter"; // adjust path if needed

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ Enable CORS for laptop + phone
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://192.168.43.179:3000", // your Wi-Fi IP
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// ✅ Routes
app.use("/api/careers", aiRouter);

// ✅ Default route (optional check)
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Career Assistant API is running...");
});

// ✅ Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

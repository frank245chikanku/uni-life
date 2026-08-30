import "dotenv/config";

import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";

import internshipRouter from "./internships/router";
import aiRouter from "./ai";
import adminRouter from "./routes/adminRoutes";

const app: Application = express();

const port = Number(process.env.PORT) || 7000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());



app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "UNI Life Guide server is running.",
  });
});



app.use("/api/internship", internshipRouter);

app.use("/api/careers", aiRouter);



app.use("/api/admin", adminRouter);



app.listen(port, "0.0.0.0", () => {
  console.log(
    `UNI Life Guide server running on port ${port}`
  );

  console.log(
    `Admin login endpoint: http://localhost:${port}/api/admin/login`
  );

  console.log(
    `Admin verification endpoint: http://localhost:${port}/api/admin/me`
  );
});
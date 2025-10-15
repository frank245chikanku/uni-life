import compression from "compression";
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./auth/router";
import internshipRouter from "./internships/router";
import aiRouter from "./ai";

const app: Application = express();
const port = 7000;

app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(cors());

// routers
app.use("/api/auth", authRouter);
app.use("/api/internship", internshipRouter);
app.use("/api/careers", aiRouter);

const start = () => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`✅ Server is up and running on http://192.168.43.179:${port}`);
  });
};

start();

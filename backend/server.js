import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import path from "path";

dotenv.config({
  path: ".env",
});

const app = express();
const _dirname = path.resolve();

// Middleware:-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// API

app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT;
app.use(express.static(path.join(_dirname, "frontend", "netflix", "dist")));

app.use((req, res) => {
  res.sendFile(
    path.resolve(_dirname, "frontend", "netflix", "dist", "index.html"),
  );
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running on port ${PORT}`);
});

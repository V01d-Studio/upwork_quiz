import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import quizRouter from "./routes/quiz.router";

import prisma from "./configs/prisma.config";
import { wrappedResponse } from "./utils/functions";

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT || "8000");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/quiz", quizRouter);

app.use("*", (_: Request, res: Response) => {
  return wrappedResponse(res, false, [404], null, 404);
});

app.use(function onError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  return wrappedResponse(res, false, [500], null, 500);
});

const server = app.listen(port, async () => {
  await prisma.$connect();
  console.log(`⚡️[server]: Server is running on PORT ${port}`);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  server.close();
  console.log("[server]: Server closed on SIGINT");
});

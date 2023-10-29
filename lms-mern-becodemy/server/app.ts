import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
require("dotenv").config();
import { ErrorMiddleware } from "./middleware/error";

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser - sending or set something from the  frontend into the backend cookie
app.use(cookieParser());

// cors - cross origin resource sharing, expose our api to the other server, we can also pass our origin or whitelist other server or IP
// app.use(cors());
app.use(cors({ origin: process.env.ORIGIN }));

// Testing our api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, message: "API is working!!" });
});

// Unknown Routes this will give errors
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// At the end use it this Error handler Middleware
app.use(ErrorMiddleware);

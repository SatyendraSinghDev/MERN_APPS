// Define some common errors in this file and call ErrorHandler
import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error.";

  // Suppose typing wrong mongodb ID, then this will give error
  // Check if the error is a MongoDB CastError (incorrect ID)
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ID: ${err.value} - ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //   Duplicate Key Error - for authentications
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = "Json web token is invalid, try again";
    err = new ErrorHandler(message, 400); // 401 for Unauthorized
  }

  //   JWT expired error
  if (err.name === "TokenExpiredError") {
    const message = "Json web token is expired, try again";
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

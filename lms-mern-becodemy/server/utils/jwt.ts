require("dotenv").config();
import { Response } from "express";
import { IUser } from "../models/user.model";
import { redis } from "./redis";

// Writing this interface to saving this into the cookies
interface ITokenOptions {
  expires: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "lax" | "strict" | "none" | undefined;
  secure?: boolean;
}

 // parse environment variables to integrates with fallback values
 const accessTokenExpire = parseInt(
  process.env.ACCESS_TOKEN_EXPIRE || "300",
  10
);
const refreshTokenExpire = parseInt(
  process.env.REFRESH_TOKEN_EXPIRE || "1200",
  10
);

// Add options to our cookies
export const accessTokenOptions: ITokenOptions = {
  expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000), // 5mint
  maxAge: accessTokenExpire * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
  // secure: true //   only set secure to true in production
};

export const refreshTokenOptions: ITokenOptions = {
  expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000), // 1day
  maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
  // secure: true  //   only set secure to true in production
};

// Send Token
export const sendToken = (user: IUser, statusCode: number, res: Response) => {
  const accessToken = user.SignAccessToken();
  const refreshToken = user.SignRefreshToken();

  //   upload user  session to redis , when user successfully logged in then we will add its session to the redis
  redis.set(user._id, JSON.stringify(user) as any); 

  // only set secure to true in production, when we deployed then only
  if (process.env.NODE_ENV === "production") {
    accessTokenOptions.secure = true; // only this one is fine
    // refreshTokenOptions.secure = true;
  }

  res.cookie("access_token", accessToken, accessTokenOptions);
  res.cookie("refresh_token", refreshToken, refreshTokenOptions);

  res.status(statusCode).json({
    success: true,
    user,
    accessToken,
  });
};

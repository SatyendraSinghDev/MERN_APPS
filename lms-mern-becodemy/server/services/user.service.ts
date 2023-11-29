import { Response } from "express";
import userModel from "../models/user.model";
import { redis } from "../utils/redis";

// Get user by id
// export const getUserById = async (id: string, res: Response) => {
//   const user = await userModel.findById(id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// };

// Get user by id
export const getUserById = async (id: string, res: Response) => {
  // const user = await userModel.findById(id);  // Instead of getting data from mongodb db we can use redis also
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);

    res.status(200).json({
      success: true,
      user,
    });
  }
};

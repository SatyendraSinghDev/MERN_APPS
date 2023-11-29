import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  udpateUserInfo,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login-user", loginUser);
userRouter.get("/logout-user", isAuthenticated, logoutUser);
// userRouter.get("/logout-user", isAuthenticated, authorizeRoles("admin") ,logoutUser);
userRouter.get("/refreshtoken", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info", isAuthenticated, udpateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);
userRouter.put("/update-user-profile", isAuthenticated, updateProfilePicture);

export default userRouter;

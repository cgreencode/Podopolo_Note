import express from "express";
import { AuthController } from "../controllers/authController";
import { UserController } from "../controllers/userController";
import { verifyUserToken } from "../middlewares/verifyUserToken";
import {
  createUserDataValidator,
  loginUserDataValidator,
} from "../validators/user.validator";

const userRouter = express.Router();
userRouter.post(
  "/signup",
  createUserDataValidator,
  AuthController.registerUser
);
userRouter.post("/login", loginUserDataValidator, AuthController.loginUser);

export default userRouter;

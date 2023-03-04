
/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a user.
 *     description: post request body as json and create user. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: buraker
 *               password:
 *                 type: string
 *                 description: The user's password with minimum length of 8.
 *                 example: 24af3535
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@example.com
 *     responses:
 *       200:
 *         description: request body post successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Success if successfully signed up a new user
 *                 message:
 *                   type: string
 *                   description: Tells the user what just happened
 *                   example: user created successfuly
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: ObjectID
 *                       description: New user's ID
 *                       example: 640263644baca3b1723663a4,
 *                     name:
 *                       type: string
 *                       description: New user's name
 *                       example: Mitchel
 *                     email:
 *                       type: string
 *                       description: New user's email
 *                       example: theaaron@gmail.com
 *                     role:
 *                       type: string
 *                       description: New user's role; admin or user
 *                       example: theaaron@gmail.com
 * 
 * /auth/login:
 *   post:
 *     summary: Login a user.
 *     description: post request body as json and login a user returning a token. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 description: The user's password with minimum length of 8.
 *                 example: 24af3535

 *     responses:
 *       200:
 *         description: request body post successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Success if successfully signed up a new user
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       description: Return a token of logged user
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAyNGRiYjNlMTYzYWEwMTAxZTBjNGYiLCJlbWFpbCI6Im5ld3VzZXJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Nzc4NzM2MjksImV4cCI6MTY3Nzk2MDAyOX0.hosmBdYBBMgM69zvTXPUbrIwzHs59_INCb52ddpSTAo
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           description: Return the id of user
 *                           example: 64024dbb3e163aa0101e0c4f
 *                         name:
 *                           type: string
 *                           description: Return the name of user
 *                           example: 64024dbb3e163aa0101e0c4f
 *                         email:
 *                           type: string
 *                           description: Return the email of user
 *                           example: 64024dbb3e163aa0101e0c4f
 *                         role:
 *                           type: string
 *                           description: New user's role; admin or user
 *                           example: admin
 * 
 */

import express, { Request, Response } from "express";
import noteRouter from "./noteRoutes";
import userRouter from "./userRoutes";
import { searchNotes } from "../controllers/noteController";
import { verifyUserToken } from "../middlewares/verifyUserToken";

const apiRouter = express.Router();

apiRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to your Express App API." });
});
apiRouter.use("/auth", userRouter);
apiRouter.use("/notes", noteRouter);
apiRouter.get('/search', verifyUserToken, searchNotes);
export default apiRouter;
/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Retrieve a list of notes.
 *     description: A user can get a list of notes requesting with his own bearer token
 *     security:
 *       bearerAuth:
 *         
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 */
import { verify } from "crypto";
import express from "express";
import {
  getAllNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
  shareNoteById
} from "../controllers/noteController";
import { verifyUserToken } from "../middlewares/verifyUserToken";
import {
  createNoteDataValidator,
  updateNoteDataValidator,
} from "../validators/note.validator";

const noteRouter = express.Router();

noteRouter
  .route("/")
  .get(verifyUserToken, getAllNotes)
  .post(verifyUserToken, createNoteDataValidator, createNote);
noteRouter
  .route("/:id")
  .get(getNoteById)
  .put(verifyUserToken, updateNoteDataValidator, updateNote)
  .delete(verifyUserToken, deleteNote)
noteRouter
  .route("/:id/share")
  .post(verifyUserToken, shareNoteById)
export default noteRouter;

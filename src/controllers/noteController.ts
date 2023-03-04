import { Request, Response } from "express";
import { NoteService } from "../services/noteService";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";

interface userRequest extends Request {
  user?: any;
}

export const getAllNotes = async (req: userRequest, res: Response) => {
  try {
    const ownNotes = await NoteService.getAllNotes(req.user._id);
    const sharedNotes = await NoteService.getSharedNotes();
    const notes = ownNotes.concat(sharedNotes);
    res.json({ status: "success", data: Serializer.notesSerializer(notes) });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const shareNoteById = async (req: userRequest, res: Response) => {
  try {
    const note = await NoteService.shareNote(req.params.id);
    res.json({
      status: "success",
      message: "note shared successfully.",
      data: Serializer.noteSerializer(note),
    });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const searchNotes = async (req: userRequest, res: Response) => {
  try {
    const ownNotes = await NoteService.getAllNotes(req.user._id);
    const sharedNotes = await NoteService.getSharedNotes();
    const notes = ownNotes.concat(sharedNotes);
    const data = Serializer.notesSerializer(notes);
    const result = data.filter((note) => {
      return note.description.includes(req.query.q)
    })
    res.json({ status: "success", data: result });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const createNote = async (req: userRequest, res: Response) => {
  try {
    const errors = validationResult(req);
    // if there is error then return Error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    req.body.author = req.user._id;
    const note = await NoteService.createNote(req.body);
    res.json({
      status: "success",
      message: "note created successfully.",
      data: Serializer.noteSerializer(note),
    });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const note = await NoteService.getNoteById(req.params.id);
    res.json({ status: "success", data: Serializer.noteSerializer(note) });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const note = await NoteService.updateNote(req.params.id, req.body);
    res.json({
      status: "success",
      message: "note updated successfully.",
      data: Serializer.noteSerializer(note),
    });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const note = await NoteService.deleteNote(req.params.id);
    res.json({ status: "success", message: "note deleted successfully." });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

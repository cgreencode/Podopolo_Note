import Note from "../models/note";

export const NoteService = {
  getAllNotes: async (id: any) => {
    return await Note.find({ author: id });
  },

  getSharedNotes: async () => {
    return await Note.find({ shared: true });
  },

  createNote: async (note: any) => {
    return await Note.create(note);
  },
  getNoteById: async (id: any) => {
    return await Note.findById(id);
  },

  updateNote: async (id: any, note: any) => {
    return await Note.findByIdAndUpdate(id, note);
  },

  deleteNote: async (id: any) => {
    return await Note.findByIdAndDelete(id);
  },

  shareNote: async (id: any) => {
    return await Note.findByIdAndUpdate(id, { shared: true });
  },

};

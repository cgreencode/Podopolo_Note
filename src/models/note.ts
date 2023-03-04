import mongoose from "mongoose";
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Note title required"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Note description required"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    shared: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true,
  }
);
const Note = mongoose.model("Note", noteSchema);
export default Note;

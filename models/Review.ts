import mongoose from "mongoose";

const createSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    author: { type: String, require: true },
    rating: { type: Number, require: true },
    description: { type: String, require: true },
    genre: [{ type: String, require: true }],
  },
  { timestamps: true },
);

const Schema =
  mongoose.models["manhwa-review"] ||
  mongoose.model("manhwa-review", createSchema);

export default Schema;

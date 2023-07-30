import mongoose from "mongoose";

const createSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
  },
  { timestamps: true },
);

const Schema =
  mongoose.models["manhwa-news"] || mongoose.model("manhwa-news", createSchema);

export default Schema;

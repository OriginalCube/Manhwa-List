import mongoose from "mongoose";

const createSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: { type: String, require: true },
  },
  { timestamps: true },
);

const Schema =
  mongoose.models["manhwa-news"] || mongoose.model("manhwa-news", createSchema);

export default Schema;

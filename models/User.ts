import mongoose, { mongo } from "mongoose";

const createSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  profile: String,
  email: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  password: String,
});

const schema =
  mongoose.models["manhwa-users"] ||
  mongoose.model("manhwa-users", createSchema);

export default schema;

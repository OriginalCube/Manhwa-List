import UserModel from "../../models/User";

const jwt = require("jsonwebtoken");

const protect = async (key: string) => {
  if (key.length == 0) return;

  let token = key;
  const decode = jwt.verify(token, process.env.MANHWA_SECRET);
  const id = await UserModel.findById(decode.id).select("-password");
  return id._id;
};

export default protect;

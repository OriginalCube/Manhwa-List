import UserModel from "../../models/User";

const jwt = require("jsonwebtoken");

const protect = async (key: string) => {
  if (key.length == 0) return;

  let token;
  token = key.split(" ")[1];
  const decode = jwt.verify(token, process.env.MANHWA_SECRET);
  const id = await UserModel.findById(decode.id).select("-password");
  console.log(id);
  return id;
};

export default protect;

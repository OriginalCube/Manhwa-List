import RegisterForm from "@/components/join/RegisterForm";
import ConnectMongo from "../../../utils/mongoose/connect";
import User from "../../../models/User";

async function onSubmit(register: FormData) {
  "use server";
  await ConnectMongo();
  if (register.get("password") !== register.get("confirmPassword")) {
    return { error: "Invalid credentials." };
  }

  const bcrypt = require("bcrypt");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(register.get("password"), salt);

  try {
    const userExist = await User.findOne({
      username: register.get("username"),
    });
    if (userExist) {
      return { error: true, message: "User already exists!" };
    }
    const createAccount = await User.create({
      firstname: register.get("firstname"),
      lastname: register.get("lastname"),
      profile: `profile${Math.floor(Math.random() * 3 + 1)}.webp`,
      email: register.get("email"),
      password: hashedPassword,
      username: register.get("username"),
    });
    return { error: false, success: await genJWT(createAccount._id) };
  } catch (err) {
    return { error: true, message: "Database submittion error." };
  }
}

const jwt = require("jsonwebtoken");

function genJWT(id: number) {
  return jwt.sign({ id }, process.env.MANHWA_SECRET, { expiresIn: "30d" });
}

export default async function Home() {
  return (
    <div className="h-auto w-full flex items-center justify-center">
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}

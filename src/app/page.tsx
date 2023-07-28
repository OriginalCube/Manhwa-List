import RegisterForm from "@/components/index/RegisterForm";
import ConnectMongo from "../../utils/mongoose/connect";
import User from "../../models/User";
import { redirect } from "next/navigation";

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
    const createAccount = await User.create({
      firstname: register.get("firstname"),
      lastname: register.get("lastname"),
      email: register.get("email"),
      password: hashedPassword,
      username: register.get("username"),
    });
    return { success: await genJWT(createAccount._id) };
  } catch (err) {
    return { error: "Database submittion error." };
  }
}

const jwt = require("jsonwebtoken");

function genJWT(id: number) {
  return jwt.sign({ id }, process.env.MANHWA_SECRET, { expiresIn: "30d" });
}

export default async function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}

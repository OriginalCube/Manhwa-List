"use client";
import { redirect } from "next/navigation";
import React from "react";

type RegisterFormPros = {
  onSubmit: (register: FormData) => { success: string; error: boolean };
};

export default function RegisterForm({ onSubmit }: RegisterFormPros) {
  const [error, setError] = React.useState("");
  const [hasAccount, setHasAccount] = React.useState(false);
  async function submittion(e: FormData) {
    const onRequest = await onSubmit(e);
    if (!onRequest.error) {
      localStorage.setItem("manhwa-list", onRequest.success);
      setError("");
      redirect("/");
    } else {
      setError(onRequest.success);
    }
  }

  return (
    <div className="w-2/6 h-4/6 text-white bg-slate-900 rounded-md shadows-xl">
      {hasAccount ? (
        <form
          action={submittion}
          className="w-full h-full flex flex-col gap-4 justify-center items-center text-xl"
        >
          <p className="text-6xl mt-10">Create Account</p>
          <div className="h-2/6 w-5/6 flex items-center justify-evenly gap-2">
            <fieldset className="w-full h-full border-2 border-slate-300">
              <legend className="text-md px-2">Firstname</legend>
              <input
                className="w-full h-full p-4 rounded-md bg-transparent outline-none"
                title="name"
                placeholder=" "
                type="text"
                name="firstname"
              />
            </fieldset>
            <fieldset className="w-full h-full border-2 border-slate-300">
              <legend className="text-md px-2">Lastname</legend>
              <input
                title="lastname"
                className="w-full h-full p-4 rounded-md bg-transparent outline-none"
                placeholder=" "
                type="text"
                name="lastname"
              />
            </fieldset>
          </div>
          <fieldset className="h-2/6 w-5/6 border-2 border-slate-300">
            <legend className="text-md px-2">Email</legend>
            <input
              title="email"
              className="w-full h-full p-4 rounded-md bg-transparent outline-none"
              type="email"
              name="email"
            />
          </fieldset>
          <fieldset className="h-2/6 w-5/6 border-2 border-slate-300">
            <legend className="text-md px-2">Username</legend>
            <input
              title="username"
              className="w-full h-full p-4 rounded-md bg-transparent outline-none"
              type="text"
              name="username"
            />
          </fieldset>
          <div className="h-2/6 w-5/6 flex items-center justify-evenly gap-2">
            <fieldset className="w-full h-full border-2 border-slate-300">
              <legend className="text-md px-2">Password</legend>
              <input
                title="password"
                className="w-full h-full p-4 rounded-md bg-transparent outline-none"
                type="password"
                name="password"
              />
            </fieldset>
            <fieldset className="w-full h-full border-2 border-slate-300">
              <legend className="text-md px-2">Confirm Password</legend>
              <input
                title="confirmPassword"
                className="w-full h-full p-4 rounded-md bg-transparent outline-none"
                type="password"
                name="confirmPassword"
              />
            </fieldset>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-sm text-red-500">{error}</p>
            <p className="text-bs text-light">
              Don't have an account?
              <span
                onClick={() => setHasAccount(false)}
                className="hover:text-blue-500 cursor-pointer"
              >
                {" "}
                Create Now
              </span>
            </p>{" "}
          </div>
          <div className="w-full h-2/6 flex items-center justify-center">
            <button
              className="text-2xl p-2 px-4 border-2 hover:bg-slate-300 hover:text-slate-800
                border-slate-300 rounded-sm font-light"
            >
              Create
            </button>
          </div>
        </form>
      ) : (
        <form className="w-full h-full flex flex-col gap-2 justify-center items-center">
          <div className="h-4/6 w-5/6 flex flex-col gap-6 items-center justify-center">
            <p className="mt-10 p-2 text-5xl font-light w-full text-center">
              Login Account
            </p>
            <fieldset className="h-24 w-5/6 border-2">
              <legend className="text-md px-2">Username</legend>
              <input
                title="username"
                className="w-full h-full p-4 border-slate-300 rounded-md bg-transparent outline-none"
                type="text"
                name="username"
                placeholder=" "
              />
            </fieldset>
            <fieldset className="h-24 w-5/6 border-2">
              <legend className="text-md px-2">Password</legend>
              <input
                title="password"
                className="w-full h-full p-4 border-slate-300 rounded-md bg-transparent outline-none"
                type="password"
                name="password"
                placeholder=" "
              />
            </fieldset>
            <p className="text-light text-bs">
              Do you have an account already?{" "}
              <span
                className="cursor-pointer"
                onClick={() => setHasAccount(true)}
              >
                Login Now!
              </span>
            </p>
            <button
              className="text-2xl p-2 px-4 border-2 hover:text-blue-500
                border-slate-300 rounded-md font-light"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

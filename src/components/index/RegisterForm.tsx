"use client";
import { redirect } from "next/navigation";
import React from "react";

type RegisterFormPros = {
  onSubmit: (register: FormData) => { success: string; error: string };
};

export default function RegisterForm({ onSubmit }: RegisterFormPros) {
  const [error, setError] = React.useState("");
  const [hasAccount, setHasAccount] = React.useState(false);
  async function submittion(e: FormData) {
    const onRequest = await onSubmit(e);
    if (onRequest.success) {
      localStorage.setItem("manhwa-list", onRequest.success);
      setError("");
      redirect("/homepage");
    } else {
      setError(onRequest.error);
    }
  }

  return (
    <div className="w-2/6 h-3/6 text-white">
      {hasAccount ? (
        <form
          action={submittion}
          className="w-full h-full flex flex-col gap-8 justify-center items-center text-xl"
        >
          <div className="h-2/6 w-5/6 flex items-center justify-evenly gap-2">
            <fieldset className="w-full h-full border-2 border-slate-300">
              <legend className="text-md px-2">Firstname</legend>
              <input
                className="w-full h-full p-4 rounded-md bg-slate-800 outline-none"
                placeholder=" "
                type="text"
                name="firstname"
              />
            </fieldset>
            <fieldset className="w-full h-full border-2 border-slate-300">
              <legend className="text-md px-2">Lastname</legend>
              <input
                className="w-full h-full p-4 rounded-md bg-slate-800 outline-none"
                placeholder=" "
                type="text"
                name="lastname"
              />
            </fieldset>
          </div>
          <div className="h-2/6 w-5/6 flex">
            <input
              className="w-full h-full p-4 border-2 
                border-slate-300 rounded-md bg-slate-800 outline-none"
              placeholder="email"
              type="text"
              name="email"
            />
          </div>
          <div className="h-2/6 w-5/6 flex">
            <input
              className="w-full h-full p-4 border-2 
                border-slate-300 rounded-md bg-slate-800 outline-none"
              placeholder="username"
              type="text"
              name="username"
            />
          </div>
          <div className="h-2/6 w-5/6 flex items-center justify-evenly gap-2">
            <input
              className="w-full h-full p-4 border-2 
                border-slate-300 rounded-md bg-slate-800 outline-none"
              placeholder="password"
              type="password"
              name="password"
            />
            <input
              className="w-full h-full p-4 border-2 
                border-slate-300 rounded-md bg-slate-800 outline-none"
              placeholder="confirm password"
              type="password"
              name="confirmPassword"
            />
          </div>
          <p className="text-xl">{error}</p>
          <div className="w-full h-2/6 flex items-center justify-center">
            <button
              className="text-xl p-2 px-4 border-2 border-slate-300 
                rounded-md hover:bg-slate-300 hover:text-slate-800"
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
                className="w-full h-full p-4 border-slate-300 rounded-md bg-slate-800 outline-none"
                type="text"
                name="username"
                placeholder=" "
              />
            </fieldset>
            <fieldset className="h-24 w-5/6 border-2">
              <legend className="text-md px-2">Password</legend>
              <input
                className="w-full h-full p-4 border-slate-300 rounded-md bg-slate-800 outline-none"
                type="password"
                name="password"
                placeholder=" "
              />
            </fieldset>
            <p className="text-light text-bs">
              Do you have an account already?
              <span
                className="cursor-pointer"
                onClick={() => setHasAccount(true)}
              >
                {" "}
                Login Now!
              </span>
            </p>
            <button
              className="text-2xl p-2 px-4 border-2 
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

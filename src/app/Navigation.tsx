"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-24 mb-8 text-slate-100 flex items-center justify-center bg-slate-900">
      <div
        className="w-5/6 h-full flex gap-5 justify-center items-center"
        style={{ borderBottom: ".25px solid white" }}
      >
        <div className="w-1/4 h-full flex items-center justify-start gap-4">
          <img
            src="/assets/icons/manhwa-logo.png"
            className="h-2/3 w-auto border-2 rounded-full"
            alt=""
          />
          <p className="text-3xl font-light text-blue-300">Manhwa list</p>
        </div>
        <div className="w-3/4 h-full text-slate-300 text-md flex gap-10 font-light items-center justify-end">
          <Link href="/">
            <button className="h-full w-full hover:text-green-500">
              Homepage
            </button>
          </Link>
          <Link href="/trending">
            <button className="h-full w-full hover:text-green-500">
              Trending
            </button>
          </Link>
          <Link href="/search">
            <button className="h-full w-full hover:text-green-500">
              Search
            </button>
          </Link>
          <Link href="/blog">
            <button className="h-full w-full hover:text-green-500">Blog</button>
          </Link>
          <Link href="/about">
            <button className="h-full w-full hover:text-green-500">
              About
            </button>
          </Link>
          <Link
            href="/join"
            className="w-auto h-full flex items-center justify-center px-6"
          >
            <p className="hover:text-blue-500">Login/Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

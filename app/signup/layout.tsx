// app/signup/layout.tsx

import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Sign Up | Exclusive",
  description: "Create your account with Exclusive..!",
};

const AuthNavbar = () => (
  <nav className="w-full py-4 px-6 flex justify-around items-center border-b border-gray-300">
    <h1 className="text-2xl font-bold">Exclusive</h1>
    <div className="flex gap-8">
      <Link href="/" className="text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-blue-600">
        Contact
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-blue-600">
        About
      </Link>
      <Link href="/signup" className="text-blue-600 font-medium ">
        Sign Up
      </Link>
    </div>
    <div className="rounded bg-gray-300 border-none flex justify-between gap-8 items-center  px-4 py-2">
      <input
        type="text"
        placeholder="What are you looking for"
        id=""
        className="focus:outline-none"
      />
      <FaSearch className="cursor-pointer" />
    </div>
  </nav>
);

// ✅ Next.js App Router layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AuthNavbar />
      <main className="flex-1 my-10 ">{children}</main>
    </div>
  );
}

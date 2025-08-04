"use client";
import React, { useState } from "react";
import Link from "next/link";

const SectionHero = () => {
  const [Users, setUsers] = useState({
    name: "",
    contact: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameWords = Users.name.trim().split(" ");
    const isValidName = nameWords.length >= 2;

    const isValidPassword = Users.password.length >= 8;

    const isValidContact =
      /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(Users.contact) ||
      /^[0-9]{10,}$/.test(Users.contact);

    if (!isValidName) {
      alert("Please enter at least 2 words in your name.");
      return;
    }

    if (!isValidContact) {
      alert("Please enter a valid email or phone number.");
      return;
    }

    if (!isValidPassword) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = [...existingUsers, Users];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Account created successfully!");

    setUsers({
      name: "",
      contact: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="flex w-[80vw] gap-36 items-center">
        <div>
          <img src="/assests/SideImage.png" alt="" className="" />
        </div>
        <div className="flex flex-col w-[25vw] gap-5">
          <h2 className="text-4xl font-semibold">Create an account</h2>
          <p>Enter your details below</p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                placeholder=" "
                value={Users.name}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:outline-none focus:border-blue-600 pt-5 pb-1"
              />
              <label
                htmlFor="name"
                className="absolute left-0 text-gray-500 text-sm transition-all duration-200
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-blue-600"
              >
                Your Name
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                id="contact"
                placeholder=" "
                value={Users.contact}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:outline-none focus:border-blue-600 pt-5 pb-1"
              />
              <label
                htmlFor="contact"
                className="absolute left-0 text-gray-500 text-sm transition-all duration-200
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-blue-600"
              >
                Email or Phone Number
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="password"
                id="password"
                placeholder=" "
                value={Users.password}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:outline-none focus:border-blue-600 pt-5 pb-1"
              />
              <label
                htmlFor="password"
                className="absolute left-0 text-gray-500 text-sm transition-all duration-200
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-blue-600"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#DB4444] text-white text-lg py-3 rounded"
            >
              Create Account
            </button>
          </form>

          <button className="text-lg py-3 rounded border border-gray-800">
            Sign Up with Google
          </button>

          <p className="text-gray-500 text-center">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;

import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
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
          <Link href="/signup" className=" text-gray-700 hover:text-blue-600">
            Sign Up
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="rounded bg-gray-300 border-none flex justify-between gap-8 items-center  px-4 py-2">
            <input
              type="text"
              placeholder="What are you looking for"
              id=""
              className="focus:outline-none"
            />
            <FaSearch className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            <Link href={"/wishlist"}>
              <CiHeart className="h-7 w-7" />
            </Link>
            <Link href={"/cart"}>
              <BsCart3 className="h-6 w-6" />
            </Link>
            <p>
              <IoPersonOutline className="h-6 w-6" />
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";
const Footer = () => {
  const [Mail, setMail] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const handleSend = () => {
    if (Mail.trim() === "") {
      alert("Please enter a valid email.");
      return;
    }
    const existingMails = JSON.parse(localStorage.getItem("mails") || "[]");
    const updatedMails = [...existingMails, Mail];
    localStorage.setItem("mails", JSON.stringify(updatedMails));
    setMail("");

    alert("Email saved successfully!");
  };
  return (
    <div>
      <footer className="bg-black  p-24 text-white">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold mb-2">Exclusive</p>
            <p className="text-lg">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="border-white border py-3 pr-2 rounded mt-2 gap-1 flex justify-between items-center">
              <input
                type="text"
                placeholder="Enter your Email"
                onChange={handleChange}
                value={Mail}
                className="text-gray-200 focus:outline-none pl-2"
              />
              <VscSend className="h-6 w-6 " onClick={handleSend} />
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-2xl font-semibold mb-2">Support</p>
            <p>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-888888-9999</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-2xl font-semibold mb-2">Account</p>
            <p>My Account</p>
            <Link href={"/signup"}>
              <p>Login / Register</p>
            </Link>
            <Link href={"/cart"}>
              <p>Cart</p>
            </Link>
            <Link href={"/wishlist"}>
              <p>WishList</p>
            </Link>
            <Link href={"/"}>
              <p>Shop</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-2xl font-semibold mb-2">Quick Link</p>
            <p>Privacy Policy </p>
            <p>Term of use</p>
            <p>FAQ</p>
            <Link href={"/contact"}>
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-2xl font-semibold mb-2">Download App</p>
            <p className="text-gray-300">Save 3$ with App New user only</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

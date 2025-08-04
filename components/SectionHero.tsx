"use client";
import SaleTimer from "./SaleTimer";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ProductType } from "@/constants/types";
import { Product } from "@/constants/mockData";
import { CiHeart } from "react-icons/ci";

const SectionHero = () => {
  const AddToWishList = (item: ProductType) => {
    const existing = localStorage.getItem("wishlist");
    const parsed = existing ? JSON.parse(existing) : [];

    const alreadyAdded = parsed.some(
      (p: ProductType) => p.title === item.title
    );
    if (alreadyAdded) return;

    const updated = [...parsed, item];
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const AddToCart = (item: ProductType) => {
    const existing = localStorage.getItem("cart");
    const parsed = existing ? JSON.parse(existing) : [];

    const alreadyAdded = parsed.some(
      (p: ProductType) => p.title === item.title
    );
    if (alreadyAdded) return;

    const updated = [...parsed, item];
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className=" mb-20 flex flex-col gap-28">
      <div className="flex items-start gap-14 px-34">
        {/* Left Side: Categories */}
        <div className="mt-10">
          <ul className="flex flex-col gap-3 text-gray-700">
            <li className="cursor-pointer">Women's Fashion</li>
            <li className="cursor-pointer">Men's Fashion</li>
            <li className="cursor-pointer">Electronic</li>
            <li className="cursor-pointer">Home & Lifestyle</li>
            <li className="cursor-pointer">Medicine</li>
            <li className="cursor-pointer">Sports & Outdoor</li>
            <li className="cursor-pointer">Baby's & Toys</li>
            <li className="cursor-pointer">Groceries & Pets</li>
            <li className="cursor-pointer">Health & Beauty</li>
          </ul>
        </div>

        {/* Divider Line */}
        <img src="/assests/Line.png" alt="" />

        {/* Right Side: Image */}
        <div className="mt-10">
          <img src="/assests/iphone.png" alt="iPhone" className="" />
        </div>
      </div>
      <div className="flex flex-col w-[80vw] mx-auto gap-8">
        <div>
          <img src="/assests/Today.png" alt="" />
        </div>

        <div className="flex justify-between items-center">
          <SaleTimer />
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="bg-gray-200 text-black rounded-full p-3"
            >
              <IoIosArrowBack className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-200 text-black rounded-full p-3"
            >
              <IoIosArrowForward className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="flex overflow-x-auto gap-10 scroll-smooth products"
          ref={scrollRef}
        >
          {Product.map((item, index) => {
            if (item.Category !== "FlashSale") return null;

            return (
              <div
                key={index}
                className="min-w-[200px] flex-col flex gap-2 shrink-0"
              >
                <div className="bg-gray-100 p-7">
                  <img src={item.img} alt="" className="h-36 w-44" />
                </div>
                <Link href={`/product/${item.id}`}>
                  <p className="font-bold">{item.title}</p>
                </Link>
                <div className="flex gap-3">
                  <p className="text-red-600">${item.Price}</p>
                  <p className="text-gray-500 line-through">
                    ${item.actualPrice}
                  </p>
                </div>
                <div className="flex gap-1 text-yellow-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => AddToCart(item)}
                    className="bg-[#DB4444] cursor-pointer transition-all transform duration-200 hover:bg-[#db4444e7] hover:text-black text-white py-2 w-full rounded"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => AddToWishList(item)}
                    className="border rounded p-2 hover:bg-black hover:text-white transition-all transform duration-200"
                  >
                    <CiHeart className="h-7 w-7" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="justify-center flex">
        <img src="/assests/Line2.png" alt="" />
      </div>
    </div>
  );
};

export default SectionHero;

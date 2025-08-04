"use client";
import React from "react";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { ProductType } from "@/constants/types";
import { Product } from "@/constants/mockData";
import { CiHeart } from "react-icons/ci";
const SectionBestSelling = () => {
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

  return (
    <div className="flex flex-col gap-28 mb-16">
      <div className="flex flex-col w-[80vw] mx-auto gap-8  ">
        <div>
          <img src="/assests/ThisMonth.png" alt="" />
        </div>
        <p className="text-3xl font-semibold text-black">
          Best Selling Products
        </p>
        <div className="flex overflow-x-auto gap-16 mt-6 scroll-smooth products">
          {Product.map((item, index) => {
            if (item.Category !== "BestSelling") return null;
            return (
              <div
                key={index}
                className="min-w-[200px] flex-col flex gap-2 shrink-0"
              >
                <div className="bg-gray-100 p-7 ">
                  <img src={item.img} alt="" className=" h-40 w-48" />
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
                <div className="mt-2 flex gap-2 ">
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
      <div className="w-[80vw] bg-black mx-auto py-12 px-9 rounded flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <p className="text-[#00FF66] text-sm font-bold">Categories</p>
          <p className="text-white text-6xl font-bold">
            Enhance Your <br /> Music Experience
          </p>
          <ul className="flex gap-4">
            <li className="flex flex-col items-center text-sm gap-0 font-bold bg-white px-4 py-3 rounded-full shadow-gray-400 shadow-md">
              23 <span className="font-normal">Hour</span>
            </li>
            <li className="flex flex-col items-center text-sm gap-0 font-bold bg-white px-4 py-3 rounded-full shadow-gray-400 shadow-md">
              05 <span className="font-normal">Days</span>
            </li>
            <li className="flex flex-col items-center text-sm gap-0 font-bold bg-white px-4 py-3 rounded-full shadow-gray-400 shadow-md">
              59 <span className="font-normal">Mins</span>
            </li>
            <li className="flex flex-col items-center text-sm gap-0 font-bold bg-white px-4 py-3 rounded-full shadow-gray-400 shadow-md">
              35 <span className="font-normal">Secs</span>
            </li>
          </ul>
          <button className="bg-[#00FF66] text-white rounded  py-3 w-32">
            Buy now!
          </button>
        </div>
        <div className="shadow-lg">
          <img src="/assests/jbl.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionBestSelling;

"use client";
import React from "react";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { ProductType } from "@/constants/types";
import { Product } from "@/constants/mockData";
import { CiHeart } from "react-icons/ci";
const SectionExplore = () => {
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
    <div className="flex flex-col gap-8 w-[80vw] mx-auto my-14">
      <div>
        <img src="/assests/OurProducts.png" alt="" />
      </div>
      <p className="text-3xl font-semibold text-black">Explore our Products</p>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {Product.map((item, index) => {
          if (item.Category !== "Explore") return null;
          return (
            <div key={index} className="w-[250px] flex-col flex gap-2 shrink-0">
              <div className="bg-gray-100 p-7">
                <img src={item.img} alt="" className="h-36 w-44" />
              </div>
              <Link href={`/product/${item.id}`}>
                <p className="font-bold">{item.title}</p>
              </Link>
              <div className="flex gap-3">
                <p className="text-red-600">${item.Price}</p>
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
  );
};

export default SectionExplore;

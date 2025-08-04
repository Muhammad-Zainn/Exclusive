"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Product } from "@/constants/mockData";
import { IoIosStar } from "react-icons/io";
import { ProductType } from "@/constants/types";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
const SectionPage = () => {
  const Params = useParams();
  const id = Number(Params.id);
  const item = Product.find((p) => p.id === id);
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

  if (!item) return <p className="text-center mt-20">Product not found.</p>;

  return (
    <div className="my-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 p-10 border  rounded-2xl shadow-lg bg-white">
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="h-[450px] w-[450px] bg-gray-200 rounded-xl flex items-center justify-center">
            <img
              src={item.img}
              alt={item.title}
              className="h-[80%] w-[80%] object-contain"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Title */}
          <p className="text-4xl font-semibold">{item.title}</p>

          {/* Rating */}
          <div className="flex items-center gap-3 text-yellow-400">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} />
              ))}
            </div>
            <p className="text-gray-500">(150 reviews)</p>
            <span className="text-gray-400">|</span>
            <p className="text-[#00FF66] font-medium">In Stock</p>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold">${item.Price}</p>

          {/* Description */}
          <div className="text-gray-600 leading-relaxed">{item.detail}</div>

          {/* Divider */}
          <img src="/assests/LineCart.png" alt="divider" className="my-2" />

          <div className=" flex gap-3">
            <button
              onClick={() => AddToCart(item)}
              className="bg-[#DB4444] cursor-pointer hover:bg-[#db4444e7] hover:text-black text-white py-2 px-10 rounded"
            >
              Add To Cart
            </button>
            <button
              onClick={() => AddToWishList(item)}
              className="border rounded p-2 hover:bg-black cursor-pointer hover:text-white transition-all transform duration-200"
            >
              <CiHeart className="h-7 w-7" />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="flex flex-col gap-6">
            {/* Delivery */}
            <div className="flex gap-4 items-start">
              <img
                src="/assests/icon-delivery.png"
                alt="delivery"
                className="h-10 w-10"
              />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-600">
                  Enter your postal code for delivery availability
                </p>
              </div>
            </div>

            {/* Return */}
            <div className="flex gap-4 items-start">
              <img
                src="/assests/icon-return.png"
                alt="return"
                className="h-10 w-10"
              />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-sm text-gray-600">
                  Free 30 days delivery return.{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    Details
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        <Link href={"/"}>
          <button className="border px-12 py-3 rounded">Return To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default SectionPage;

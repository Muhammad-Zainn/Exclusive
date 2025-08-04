"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/constants/types";
import { RxCross2 } from "react-icons/rx";

const WishListPage = () => {
  const [wishList, setWishList] = useState<ProductType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishList(JSON.parse(stored));
    }
  }, []);

  const RemovefromWishList = (name: string) => {
    const stored = localStorage.getItem("wishlist");
    if (!stored) return;

    const parsed = JSON.parse(stored);
    const updated = parsed.filter((item: ProductType) => item.title !== name);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishList(updated);
  };

  const ClearWishList = () => {
    localStorage.removeItem("wishlist");
    setWishList([]);
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
    <div className=" w-[90vw] mx-auto flex flex-col gap-8">
      <div className="flex  justify-between">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
        <button
          onClick={ClearWishList}
          className="bg-[#00FF66] cursor-pointer hover:bg-[#00ff99e4] text-white rounded py-2 w-40"
        >
          Clear Wishlist
        </button>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {wishList.map((item) => (
          <div key={item.id} className="w-[250px] flex-col flex gap-2 shrink-0">
            <div className="bg-gray-100 p-7">
              <img src={item.img} alt="" className="h-36 w-44" />
            </div>
            <p className="font-bold">{item.title}</p>
            <div className="flex gap-3">
              <p className="text-red-600">${item.Price}</p>
              {(item.Category === "BestSelling" ||
                item.Category === "FlashSale") && (
                <p className="text-gray-500 line-through">
                  ${item.actualPrice}
                </p>
              )}
            </div>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => AddToCart(item)}
                className="bg-[#DB4444] cursor-pointer transition-all transform duration-200 hover:bg-[#db445b] hover:text-black text-white py-2 rounded w-full"
              >
                Add To Cart
              </button>
              <button
                onClick={() => RemovefromWishList(item.title)}
                className="border rounded p-2 hover:bg-black hover:text-white transition-all transform duration-200"
              >
                <RxCross2 className="h-7 w-7" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListPage;

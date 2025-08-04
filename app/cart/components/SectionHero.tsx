"use client";
import React, { useState, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa6";

const SectionHero = () => {
  type ProductType = {
    id: number;
    img: string;
    title: string;
    Price: number;
    cartTitle: string;
    quantity: number; // NEW: add quantity field
  };

  const [Cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      const parsed = JSON.parse(stored);
      const updated = parsed.map((item: ProductType) => ({
        ...item,
        quantity: item.quantity || 1, // Default quantity if missing
      }));
      setCart(updated);
    }
  }, []);

  const updateLocalStorage = (updatedCart: ProductType[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const incrementQty = (index: number) => {
    const updatedCart = [...Cart];
    updatedCart[index].quantity += 1;
    updateLocalStorage(updatedCart);
  };

  const decrementQty = (index: number) => {
    const updatedCart = [...Cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateLocalStorage(updatedCart);
    }
  };

  const RemovefromCart = (name: string) => {
    const updated = Cart.filter((item) => item.title !== name);
    updateLocalStorage(updated);
  };

  const ClearWishList = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const calculateSubtotal = () => {
    return Cart.reduce((acc, item) => acc + item.Price * item.quantity, 0);
  };

  return (
    <div className="w-[80vw] mx-auto my-24">
      <div className="flex flex-col gap-8 ">
        <div className="flex justify-between px-6 py-4 border border-gray-100 shadow-md ">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>

        <div className="flex flex-col gap-4 ">
          {Cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between gap-[300px] px-6 py-4 border border-gray-100 shadow-md items-center"
            >
              <div className="flex gap-4 items-center">
                <img src={item.img} alt="" className="h-16 w-16" />
                <p>{item.cartTitle}</p>
              </div>
              <p>${item.Price}</p>
              <div className="flex items-center gap-2">
                <button
                  className="p-1 rounded bg-black text-white cursor-pointer"
                  onClick={() => decrementQty(index)}
                >
                  <FaMinus className="h-4 w-4" />
                </button>
                <p className="text-lg">{item.quantity}</p>

                <button
                  className="p-1 rounded bg-[#DB4444] cursor-pointer"
                  onClick={() => incrementQty(index)}
                >
                  <FaPlus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <p>${item.Price * item.quantity}</p>
                <button onClick={() => RemovefromCart(item.title)}>
                  <RxCrossCircled />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <Link href={"/"}>
            <button className="border px-12 py-3 rounded">
              Return To Home
            </button>
          </Link>
          <button onClick={ClearWishList} className="border px-12 py-3 rounded">
            Clear Cart
          </button>
        </div>

        <div className="flex justify-between mt-20">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Coupon Code"
              className="text-gray-500 border border-black px-5 rounded shadow w-72 h-14"
            />
            <button className="bg-[#DB4444] cursor-pointer hover:bg-[#db4444e7] h-14 hover:text-black text-white py-2 px-12 rounded">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col gap-3 py-8 px-5 border-[2px] border-black">
            <p className="text-lg font-semibold mb-2">Cart Total</p>
            <div className="flex justify-between">
              <p>SubTotal:</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <img src="/assests/LineCart.png" alt="" />
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <img src="/assests/LineCart.png" alt="" />
            <div className="flex justify-between">
              <p>Total:</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-[#DB4444] cursor-pointer hover:bg-[#db4444e7] h-14 hover:text-black text-white py-1 w-66  rounded">
                Process To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;

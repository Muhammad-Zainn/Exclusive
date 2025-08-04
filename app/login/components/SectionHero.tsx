import React from "react";
import Link from "next/link";
const SectionHero = () => {
  return (
    <div>
      <div className="flex w-[80vw] gap-36 items-center">
        <div>
          <img src="/assests/SideImage.png" alt="" className="" />
        </div>
        <div className="flex flex-col w-[25vw] gap-5">
          <h2 className="text-4xl font-semibold">Login To Exclusive</h2>
          <p className=" ">Enter your details below</p>

          <div className="relative w-full">
            <input
              type="text"
              id="contact"
              placeholder=" "
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
              type="text"
              id="password"
              placeholder=" "
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
          <div className="flex justify-between items-center mt-6">
            <button className="bg-[#DB4444] text-white text-lg px-9 py-2 rounded">
              Login
            </button>

            <p className="text-[#DB4444] text-center">Forget Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;

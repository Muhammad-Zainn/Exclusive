import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const SectionCategories = () => {
  type CategoryType = {
    img: string;
    name: string;
  };
  const Categories: CategoryType[] = [
    {
      img: "/assests/CellPhone.svg",
      name: "Phones",
    },
    {
      img: "/assests/Computer.svg",
      name: "Computers",
    },
    {
      img: "/assests/SmartWatch.svg",
      name: "SmartWatch",
    },
    {
      img: "/assests/Camera.svg",
      name: "Camera",
    },
    {
      img: "/assests/Headphone.svg",
      name: "HeadPhones",
    },
    {
      img: "/assests/GamePad.svg",
      name: "Gaming",
    },
  ];

  return (
    <div className="flex flex-col gap-28 mb-14">
      <div className="flex flex-col w-[80vw] mx-auto gap-8 ">
        <div>
          <img src="/assests/Categories.png" alt="" />
        </div>
        <div className="flex  justify-between items-center">
          <p className="text-3xl font-semibold text-black">
            Browse By Category
          </p>
          <div className="flex items-center gap-2">
            <button className="bg-gray-200 text-black rounded-full p-3">
              <IoIosArrowBack className="h-5 w-5" />
            </button>
            <button className="bg-gray-200 text-black rounded-full p-3">
              <IoIosArrowForward className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex gap-5 mt-8">
          {Categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center p-6 border border-gray-400 min-w-[190px] transition-all transform duration-200 hover:bg-[#DB4444]"
            >
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center flex">
        <img src="/assests/Line2.png" alt="" />
      </div>
    </div>
  );
};

export default SectionCategories;

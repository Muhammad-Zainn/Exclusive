import React from "react";
import Link from "next/link";
const SectionNewArival = () => {
  type FaciltiesType = {
    img: string;
    service: string;
    detail: string;
  };
  const Facilties: FaciltiesType[] = [
    {
      img: "/assests/Service5.svg",
      service: "FREE AND FAST DELIVERY",
      detail: "Free delivery for all order above 140$",
    },
    {
      img: "/assests/Service6.svg",
      service: "24/7 CUSTOMER SERVICE",
      detail: "Freindly 24/7 customer support",
    },
    {
      img: "/assests/Service7.svg",
      service: "MONEY BACK GURANTEE",
      detail: "We return money in 30 days",
    },
  ];
  return (
    <div className="flex flex-col gap-8 mt-20 w-[80vw] mb-36 mx-auto">
      <div>
        <img src="/assests/Featured.png" alt="" />
      </div>
      <p className="text-3xl font-semibold text-black">New Arrival</p>
      <div className="grid grid-cols-2  gap-9 mt-6 ">
        <div className="w-full bg-black relative pt-5 px-5 rounded group">
          <div className="relative z-0">
            <img
              src="/assests/ps5.png"
              alt="PlayStation 5"
              className="w-full h-[550px]"
            />
          </div>
          <div className="absolute bottom-10 left-10 z-10 text-white group-hover:bottom-12 group-hover:left-12 transition-all transform duration-200">
            <p className="text-4xl font-semibold">PlayStation 5</p>
            <p className="mt-2 text-sm">
              Black and white version of PS5 <br /> coming out on sale
            </p>
            <p className="mt-4 underline cursor-pointer">Shop Now</p>
          </div>
        </div>

        <div className="flex-col flex gap-8">
          <div className="w-full bg-black relative rounded group">
            <div className="relative z-0 left-0">
              <img
                src="/assests/woman.png"
                alt="PlayStation 5"
                className="w-full h-[300px] rounded"
              />
            </div>
            <div className="absolute bottom-6 left-6 group-hover:bottom-8 group-hover:left-7 transition-all transform duration-200 z-10 text-white">
              <p className="text-3xl font-semibold">Women's Collection</p>
              <p className="mt-2 text-sm">
                Features Women's collection that <br /> give you another vibe
              </p>
              <p className="mt-4 underline cursor-pointer">Shop Now</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-full bg-black relative p-5 rounded group">
              <div className="relative z-0">
                <img
                  src="/assests/speaker.png"
                  alt="PlayStation 5"
                  className="w-full h-[198px]"
                />
              </div>
              <div className="absolute bottom-5 left-5 z-10 text-white group-hover:bottom-7 group-hover:left-6 transition-all transform duration-200">
                <p className="text-3xl font-semibold">Speakers</p>
                <p className="mt-2 text-sm">Amazon Wireless Speaker</p>
                <p className="mt-4 underline cursor-pointer">Shop Now</p>
              </div>
            </div>
            <div className="w-full bg-black relative p-5 rounded group">
              <div className="relative z-0">
                <img
                  src="/assests/perfume.png"
                  alt="PlayStation 5"
                  className="w-full h-[198px]"
                />
              </div>
              <div className="absolute bottom-5 left-5 z-10 text-white group-hover:bottom-7 group-hover:left-6 transition-all transform duration-200">
                <p className="text-3xl font-semibold">Perfumes</p>
                <p className="mt-2 text-sm">GUCCI INTENSE OUD EDP</p>
                <p className="mt-4 underline cursor-pointer">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-12 w-[80vw] mx-auto mt-20">
        {Facilties.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 w-[250px]"
          >
            <img
              src={item.img}
              alt={`Service ${index + 1}`}
              className="h-16 w-16 mb-2 "
            />
            <h3 className="text-lg font-semibold">{item.service}</h3>
            <p className="text-center text-sm text-gray-600 group-hover:text-white">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionNewArival;

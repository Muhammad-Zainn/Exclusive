import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
const SectionHero = () => {
  type ServiceType = {
    img: string;
    num: string;
    details: string;
  };

  type TeamType = {
    img: string;
    name: string;
    desig: string;
    insta: string;
    linkedin: string;
    x: string;
  };

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
  const Team: TeamType[] = [
    {
      img: "/assests/TomCruise.png",
      name: "Tom Cruise",
      desig: "Founder and Chairman",
      insta: "https://instagram.com/tomcruise",
      linkedin: "https://linkedin.com/in/tomcruise",
      x: "https://x.com/tomcruise",
    },
    {
      img: "/assests/EmmaWatson.png",
      name: "Emma Watson",
      desig: "Managing Director",
      insta: "https://www.instagram.com/emmawatson/",
      linkedin: "https://linkedin.com/in/tomcruise",
      x: "https://x.com/emmawatson",
    },
    {
      img: "/assests/WillSmith.png",
      name: "Will Smith",
      desig: "Product Designer",
      insta: "https://www.instagram.com/willsmith/",
      linkedin: "https://ng.linkedin.com/in/will-smith-4431891b4",
      x: "https://x.com/tomcruise",
    },
  ];
  const Services: ServiceType[] = [
    {
      img: "/assests/Service1.svg",
      num: "10.5K",
      details: "Sellers active on our site",
    },
    {
      img: "/assests/Service2.svg",
      num: "33K",
      details: "Monthly Products sale",
    },
    {
      img: "/assests/Service3.svg",
      num: "45.4K",
      details: "Customers active on our site",
    },
    {
      img: "/assests/Service4.svg",
      num: "25K",
      details: "Annual gross sale on our site",
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-38 mt-16 mb-32 ">
        <div className="flex items-center gap-16">
          <div className="flex-col flex gap-6 flex-1/2 px-24">
            <h1 className="text-5xl font-semibold mb-6">Our Story</h1>
            <p className="text-lg">
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in bangladesh.
              supported by wide range of tailored marketing, data and service
              soltuins, Exclusive has 10,500 sellers and 300 brands and serves
              3million customers accross the region.
            </p>
            <p className="text-lg">
              Exclusive has more than 1 million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer
            </p>
          </div>
          <div>
            <img src="/assests/girls.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center gap-8 w-[80vw] mx-auto">
          {Services.map((item, index) => (
            <div
              key={index}
              className="group transition-all transform duration-300 hover:text-white hover:bg-[#DB4444] flex flex-col items-center text-center border shadow-lg p-6 rounded gap-2 w-[250px]"
            >
              <img
                src={item.img}
                alt={`Service ${index + 1}`}
                className="h-16 w-16 mb-2 "
              />
              <h3 className="text-2xl font-semibold">{item.num}</h3>
              <p className="text-lg text-gray-600 group-hover:text-white">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 w-[80vw] mx-auto">
          {Team.map((item, index) => (
            <div key={index} className="flex flex-col gap-1 ">
              <img src={item.img} alt="" className="mb-2" />
              <p className="text-3xl font-semibold">{item.name}</p>
              <p className="text-sm">{item.desig}</p>
              <div className="flex gap-5 mt-4">
                <a href={item.x} target="_blank">
                  <FaTwitter />
                </a>
                <a href={item.insta} target="_blank">
                  <AiFillInstagram />
                </a>
                <a href={item.linkedin} target="_blank">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-12 w-[80vw] mx-auto">
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
    </section>
  );
};

export default SectionHero;

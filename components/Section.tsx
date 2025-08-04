import React from "react";
import SectionHero from "./SectionHero";
import Navbar from "./Navbar";
import SectionCategories from "./SectionCategories";
import SectionBestSelling from "./SectionBestSelling";
import SectionExplore from "./SectionExplore";
import SectionNewArival from "./SectionNewArival";

const Section = () => {
  return (
    <div>
      <Navbar />
      <SectionHero />
      <SectionCategories />
      <SectionBestSelling />
      <SectionExplore />
      <SectionNewArival />
    </div>
  );
};

export default Section;

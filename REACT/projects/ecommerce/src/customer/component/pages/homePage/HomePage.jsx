import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../homeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../../data/mens_kurta";

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10 border">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"} />
      </div>
    </div>
  );
}

export default HomePage;

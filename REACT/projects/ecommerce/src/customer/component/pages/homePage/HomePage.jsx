import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../homeSectionCarousel/HomeSectionCarousel";

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div>
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default HomePage;

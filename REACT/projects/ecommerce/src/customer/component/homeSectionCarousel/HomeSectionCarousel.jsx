import React, { useState } from "react";
import HomeSectionCard from "../../homeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mens_kurta } from "../../../data/mens_kurta";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = mens_kurta.map((item) => <HomeSectionCard product={item} />);

  // Create a reference to the carousel instance
  const [carousel, setCarousel] = useState(null);

  // Define the functions to handle the button clicks
  const handlePrev = () => {
    carousel.slidePrev();
  };

  const handleNext = () => {
    carousel.slideNext();
  };

  return (
    <div className="relative border">
      <div className="relative p-5 ">
        <AliceCarousel
          // Pass the reference to the carousel instance
          ref={(el) => setCarousel(el)}
          items={items}
          responsive={responsive}
          disableButtonsControls
          autoPlay
          autoPlayInterval={3000}
          disableDotsControls
        />
        {/* Add the buttons to the carousel container */}
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          // Add the onClick handler for the prev button
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          // Add the onClick handler for the next button
          onClick={handleNext}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
}

export default HomeSectionCarousel;

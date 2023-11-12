import React, { useState } from "react";
import HomeSectionCard from "../../homeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mens_kurta } from "../../../data/mens_kurta";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function HomeSectionCarousel({ data, sectionName }) {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = mens_kurta
    // .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  // Create a reference to the carousel instance
  const [carousel, setCarousel] = useState(null);

  // Create a state to store the current active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Define the functions to handle the button clicks
  const handlePrev = () => {
    carousel.slidePrev();
    activeIndex - 1;
  };

  const handleNext = () => {
    carousel.slideNext();
    activeIndex + 1;
  };

  // Define a function to handle the slide change event
  const handleSlideChange = (event) => {
    // Update the active index state with the new index from the event object
    setActiveIndex(event.item);
  };

  // Get the number of items per slide based on the window width
  const itemsPerSlide =
    window.innerWidth < 720 ? 1 : window.innerWidth < 1024 ? 3 : 5.5;

  return (
    <div className="relative border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-2 px-2">
        {sectionName}
      </h2>
      <div className="relative p-5 mx-auto">
        <AliceCarousel
          // Pass the reference to the carousel instance
          ref={(el) => setCarousel(el)}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          // Add the onSlideChange handler to update the active index state before the slide changes
          onSlideChanged={handleSlideChange}
        />
        {/* Add the buttons to the carousel container */}
        {/* Show the prev button only if the active index is not zero */}
        {activeIndex !== 0 && (
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
        )}

        {/* Show the next button only if there are more items left to see */}
        {/* Use Math.ceil instead of Math.floor to round up the number of items per slide */}
        {/* Use activeIndex + itemsPerSlide instead of activeIndex to check how many items are visible in the current slide */}
        {activeIndex !== items.length - 5 && (
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
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;

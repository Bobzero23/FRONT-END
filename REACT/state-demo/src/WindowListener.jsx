import React, { useEffect, useState } from "react";

const WindowListener = () => {
  const [width, setWidth] = useState(window.innerHeight);

  const handleSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener(`resize`, handleSize);
  }, []);
  return <div>{width}</div>;
};

export default WindowListener;

import React, { useState } from "react";
import { makeSound } from "./Service.js";

const Implementation = () => {
  const [sound, setSound] = useState("No sound yet");

  const handleSound = () => {
    setSound("I am making a sound");
    makeSound.voice(sound);
  };

  return <div onClick={handleSound}>{sound}</div>;
};

export default Implementation;

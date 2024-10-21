import React, { useContext, useState } from "react";
import "./App.css";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
    </>
  );
}

export default App;

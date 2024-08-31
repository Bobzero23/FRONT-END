import React, { useContext, useState } from "react";
import "./App.css";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function App() {
  const toggleTheme = useContext(ThemeContext);
  console.log(toggleTheme);

  return (
    <ThemeProvider>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}

export default App;

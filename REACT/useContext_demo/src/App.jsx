import React, { useState } from "react";
import "./App.css";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((darkTheme) => !darkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;

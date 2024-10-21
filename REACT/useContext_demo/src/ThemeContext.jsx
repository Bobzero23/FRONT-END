import React, { useState } from "react";

export const ThemeContext = React.createContext(true);

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((darkTheme) => !darkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

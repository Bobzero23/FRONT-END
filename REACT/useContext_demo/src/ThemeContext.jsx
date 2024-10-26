import React, { useState } from 'react'

export const themeContex = React.createContext(true);

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme((theme) => !theme)
    }

  return (
    <themeContex.Provider value={{toggleTheme, theme}}>
        {children}
    </themeContex.Provider>
  )
}

export default ThemeContextProvider
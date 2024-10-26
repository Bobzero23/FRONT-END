import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { themeContex } from './ThemeContext';
const ThemeBox = () => {
  const {theme} = useContext(themeContex);

  const themeStyles = {
    backgroundColor: theme ? "#333" : "#CCC",
    color: theme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    border: "1px solid black",
    height: "20px"
  };

  return (
    <Box sx={themeStyles}>theme</Box>
  )
}

export default ThemeBox
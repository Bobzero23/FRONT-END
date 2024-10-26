import React, { useContext, useState } from "react";
import "./App.css";
import {styled} from "@mui/material/styles"
import { Box } from "@mui/material";
import ThemeBox from "./ThemeBox";
import { themeContex } from "./ThemeContext";

const ToggleThemeButton = styled('button')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 16, 
  paddingBottom: 16,
  paddingLeft: 32, 
  paddingRight: 32,
  fontSize: '16px', 
  backgroundColor: theme.palette.primary.main, 
  color: '#fff', 
  border: 'none', 
  borderRadius: '8px', 
  cursor: 'pointer',
  [theme.breakpoints.up('lg')]: {
      paddingLeft: 280, 
  },
  '&:hover': {
      backgroundColor: theme.palette.primary.dark, 
  }
}));

function App() {
  const {toggleTheme} = useContext(themeContex);

  return (
    <Box sx={{display: "flex", gap: 2, flexDirection: "column"}}>
      <ToggleThemeButton onClick={toggleTheme}>Toggle Theme</ToggleThemeButton>
      <ThemeBox/>
    </Box>
  );
}

export default App;

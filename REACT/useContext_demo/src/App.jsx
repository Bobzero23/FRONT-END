import React, { useContext, useState } from "react";
import "./App.css";
import {styled} from "@mui/material/styles"

const ToggleThemeButton = styled('button')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 16, // Adjust padding as needed for buttons
  paddingBottom: 16,
  paddingLeft: 32,  // Adds padding to make the button appear well-sized
  paddingRight: 32,
  fontSize: '16px', // Customize button text size
  backgroundColor: theme.palette.primary.main, // Use the theme's primary color
  color: '#fff', // White text for contrast
  border: 'none', // No border for modern button style
  borderRadius: '8px', // Rounded corners
  cursor: 'pointer',
  [theme.breakpoints.up('lg')]: {
      paddingLeft: 280, // For larger screens, if needed
  },
  '&:hover': {
      backgroundColor: theme.palette.primary.dark, // Darker background on hover
  }
}));

function App() {
  return (
    <>
      <ToggleThemeButton>Toggle Theme</ToggleThemeButton>
    </>
  );
}

export default App;

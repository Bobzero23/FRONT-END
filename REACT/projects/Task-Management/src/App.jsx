import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/DarkTheme";
import Navbar from "./page/navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;

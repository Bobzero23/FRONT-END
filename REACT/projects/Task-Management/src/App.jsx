import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/DarkTheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./home/Home";
import Auth from "./page/auth/Auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Navbar />
      <Home /> */}
      <Auth />
    </ThemeProvider>
  );
}

export default App;

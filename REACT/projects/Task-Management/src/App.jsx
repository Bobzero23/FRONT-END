import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/DarkTheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./home/Home";
import Auth from "./page/auth/Auth";

function App() {
  const user = true;
  return (
    <ThemeProvider theme={darkTheme}>
      {user ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;

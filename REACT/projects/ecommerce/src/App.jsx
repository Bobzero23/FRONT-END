import "./App.css";
import Footer from "./customer/component/footer/Footer";
import Navigation from "./customer/component/navigation/Navigation";
import HomePage from "./customer/component/pages/homePage/HomePage";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <div>
          <HomePage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

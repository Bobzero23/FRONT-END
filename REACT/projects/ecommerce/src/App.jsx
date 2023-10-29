import "./App.css";
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
      </div>
    </>
  );
}

export default App;

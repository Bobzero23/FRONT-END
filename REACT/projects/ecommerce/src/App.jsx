import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./customer/component/ProductDetails/ProductDetails";
import Cart from "./customer/component/cart/Cart";
import Checkout from "./customer/component/checkout/Checkout";
import Footer from "./customer/component/footer/Footer";
import Navigation from "./customer/component/navigation/Navigation";
import Order from "./customer/component/order/Order";
import HomePage from "./customer/component/pages/homePage/HomePage";
import Product from "./customer/component/product/Product";
import CustomRouters from "./routers/CustomRouters";

function App() {
  return (
    <>
      <div>
        <div className="">
          <Routes>
            <Route path="/*" element={<CustomRouters />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

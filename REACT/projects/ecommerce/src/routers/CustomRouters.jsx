import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/component/pages/homePage/HomePage";
import Cart from "../customer/component/cart/Cart";
import Footer from "../customer/component/footer/Footer";
import Navigation from "../customer/component/navigation/Navigation";
import Product from "../customer/component/product/Product";
import ProductDetails from "../customer/component/ProductDetails/ProductDetails";
import Checkout from "../customer/component/checkout/Checkout";
import Order from "../customer/component/order/Order";
import OrderDetails from "../customer/component/order/OrderDetails";

const CustomRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThre"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>

        {/* <Order /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomRouters;

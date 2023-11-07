import "./App.css";
import ProductDetails from "./customer/component/ProductDetails/ProductDetails";
import Cart from "./customer/component/cart/Cart";
import Footer from "./customer/component/footer/Footer";
import Navigation from "./customer/component/navigation/Navigation";
import HomePage from "./customer/component/pages/homePage/HomePage";
import Product from "./customer/component/product/Product";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <div>
          {/* <HomePage /> */}
          {/* <Product /> */}
          {/* <ProductDetails /> */}
          <Cart />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

import Signup from "./page/auth/Signup";
import Signin from "./page/auth/signin";
import AddProduct from "./page/product/AddProduct";
import Product from "./page/product/Product";
import ProductList from "./page/product/ProductList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

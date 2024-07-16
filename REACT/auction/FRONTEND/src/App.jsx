import Signup from "./page/auth/Signup";
import Signin from "./page/auth/signin";
import AddProduct from "./page/product/AddProduct";
import Product from "./page/product/Product";
import ProductList from "./page/product/ProductList";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./providers/protectedRoutes";
import { io } from "socket.io-client";

import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const connectedSocket = io("http://localhost:5555", {
      //connecting with database
      transports: ["websocket"],
      withCredentials: true, // Kredi bilgileriyle birlikte
    });
    connectedSocket.on("connect", () => {
      setSocket(connectedSocket);
    });
    connectedSocket.on("biddingAProduct", (product) => {});
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <ProductList socket={socket} />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/AddProduct"
        element={
          <ProtectedRoutes>
            <AddProduct />
          </ProtectedRoutes>
        }
      />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import AddProduct from "./AddProduct";
import { getAllProducts } from "../../state/productSlice.js";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../state/slice.js";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, auth } = useSelector((store) => store);
  const [leftBalance, setLeftBalance] = useState(auth.balance);

  useEffect(() => {
    dispatch(getUserById());
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setLeftBalance(auth.balance);
  }, [auth.balance]);

  const [openAddProductForm, setOpenAddProductForm] = useState(false);

  const handleCloseAddProductForm = () => {
    setOpenAddProductForm(false);
  };

  const handleOpenAddProductForm = () => {
    setOpenAddProductForm(true);
  };

  const handleAddProduct = () => {
    handleOpenAddProductForm();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Signin");
  };

  const handleSetleftBalance = (data) => {
    setLeftBalance(data);
  };

  return (
    <div className="flex flex-col space-y-3 items-center justify-center p-5">
      <div className="flex gap-1 flex-wrap justify-center items-center overflow-y-auto h-[calc(100vh-100px)]">
        {product.products.length > 0 &&
          product?.products?.map((item) => (
            <Product
              product={item}
              key={item._id}
              handleSetleftBalance={handleSetleftBalance}
            />
          ))}
      </div>
      <div className="space-x-2">
        <Button variant="contained" onClick={handleLogout}>
          LOGOUT
        </Button>
        {auth.isAdmin ? (
          <Button variant="contained" onClick={handleAddProduct}>
            ADD PRODUCT
          </Button>
        ) : (
          <Button variant="outlined">
            YOUR CURRENT BALANCE:{" "}
            <span className="ml-1 font-bold">{leftBalance}</span>
          </Button>
        )}
      </div>
      <AddProduct
        open={openAddProductForm}
        handleClose={handleCloseAddProductForm}
      />
    </div>
  );
};

export default ProductList;

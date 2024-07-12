import React, { useState } from "react";
import Product from "./Product";
import { Button } from "@mui/material";
import AddProduct from "./AddProduct";

// demo list
const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// demo admin
const admin = true;
const user = true;

const ProductList = () => {
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

  return (
    <div className="flex flex-col space-y-3 items-center justify-center p-5">
      <div className="flex gap-1 flex-wrap justify-center items-center overflow-y-auto h-[calc(100vh-100px)]">
        {list.map((item) => (
          <Product />
        ))}
      </div>
      <div>
        {admin ? (
          <Button variant="outlined">
            YOUR CURRENT BALANCE:{" "}
            <span className="ml-1 font-bold"> 500,000</span>
          </Button>
        ) : (
          <Button variant="contained" onClick={handleAddProduct}>
            ADD PRODUCT
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

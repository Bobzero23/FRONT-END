import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import { getAllProducts } from "../../state/productSlice";

// demo list
// const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// demo admin
const admin = false;
const user = true;

const ProductList = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  console.log(product);
  useEffect(() => {
    (async () => {
      dispatch(getAllProducts());
    })();
  }, []);

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
        {product?.products.map((item) => (
          <Product product={item} />
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

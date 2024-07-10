import React from "react";
import Product from "./Product";
import { Button } from "@mui/material";
const list = [1, 1, 1, 1, 1];

const ProductList = () => {
  return (
    <div className="space-y-3 flex flex-col items-center justify-center p-5">
      <div className="flex space-x-3">
        {list.map((item) => (
          <Product />
        ))}
      </div>
      <div>
        <Button variant="contained">ADD PRODUCT</Button>
      </div>
    </div>
  );
};

export default ProductList;

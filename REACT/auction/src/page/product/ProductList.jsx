import React from "react";
import Product from "./Product";
import { Button } from "@mui/material";
const list = [1, 1, 1, 1, 1];

const ProductList = () => {
  return (
    <div className="flex flex-col space-y-3 items-center justify-center p-5">
      <div className="flex gap-1 flex-wrap justify-center items-center">
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

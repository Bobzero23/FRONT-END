import { Button, TextField } from "@mui/material";
import React from "react";

const AddProduct = () => {
  return (
    <div className="flex items-center justify-center h-screen px-3">
      <div>
        <form className="space-y-3">
          <TextField
            fullWidth
            name="image_link"
            label="paste the image link here"
          />
          <TextField
            fullWidth
            name="starting_bid"
            label="enter the first bid"
          />
          <div>
            <Button fullWidth type="submit" variant="contained">
              ADD A PRODUCT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

import "./Product.css";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const reachedFinalBid = false;
const outOfbiddingTime = false;
const admin = localStorage.getItem("isAdmin") === "true";

const Product = ({ product }) => {
  const [formData, setFormData] = useState({
    startingBid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      startingBid: "",
    });
  };

  const handleReachedFinalBid = () => {};

  return (
    <div className="cardBorder productCard flex flex-col w-[300px] h-auto p-3">
      <div className="flex justify-center mb-5">
        <img
          className="object-cover w-full max-w-[7rem] h-[150px]"
          src={product.link}
          alt=""
        />
      </div>

      {reachedFinalBid ? (
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-red-900">SOLD OUT</h1>
        </div>
      ) : outOfbiddingTime ? (
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-orange-500">
            NOT SELLING FOR NOW
          </h1>
        </div>
      ) : admin ? (
        <div className="cardBorder p-1 mb-1">
          current bid:{" "}
          <span className="font-extrabold text-green-900 ml-1">
            {product.startingBid}
          </span>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="cardBorder p-1 mb-1">
            current bid:{" "}
            <span className="font-extrabold text-green-900 ml-1">
              {product.startingBid}
            </span>
          </div>
          <div className="cardBorder flex justify-between p-1 space-x-3">
            <form
              className="w-full flex justify-between"
              action=""
              onSubmit={handleSubmit}
            >
              <TextField
                onChange={handleChange}
                className="w-32"
                name="startingBid"
                label="bid"
                value={formData.startingBid}
                //this is how to apply style to a MUI components
                sx={{
                  "& .MuiInputBase-root": {
                    height: 40,
                    padding: 0,
                    width: 195,
                  },
                  "& .MuiInputLabel-root": { top: "-5px" },
                }}
              />
              <Button variant="contained" type="submit">
                BID
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

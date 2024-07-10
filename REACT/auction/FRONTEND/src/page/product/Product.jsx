import "./Product.css";
import { Button, TextField } from "@mui/material";
import React from "react";

const reachedFinalBid = false;
const outOfbiddingTime = true;
const admin = true;

const Product = () => {
  return (
    <div className="cardBorder productCard flex flex-col w-[300px] h-auto p-3">
      <div className="flex justify-center mb-5">
        <img
          className="object-cover w-full max-w-[7rem] h-auto"
          src="https://images.unsplash.com/photo-1718068769782-b76cda287298?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {admin ? (
        <div className="cardBorder p-1 mb-1">
          current bid:{" "}
          <span className="font-extrabold text-green-900 ml-1">200,000</span>
        </div>
      ) : reachedFinalBid ? (
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-red-900">SOLD OUT</h1>
        </div>
      ) : outOfbiddingTime ? (
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-orange-500">
            NOT SELLING FOR NOW
          </h1>
        </div>
      ) : (
        <div className="cardBorder flex justify-between p-1 space-x-3">
          <TextField
            className="w-32"
            name="bid"
            label="bid"
            //this is how to apply style to a MUI components
            sx={{
              "& .MuiInputBase-root": { height: 40, padding: 0, width: 195 },
              "& .MuiInputLabel-root": { top: "-5px" },
            }}
          />
          <Button variant="contained">BID</Button>
        </div>
      )}
    </div>
  );
};

export default Product;

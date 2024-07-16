import "./Product.css";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { updateBid } from "../../state/productSlice";

let outOfbiddingTime = false;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(700000);
  const { auth } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    bid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearForm = () => {
    setFormData({
      bid: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateBid({ id: product._id, startingBid: formData.bid }));
    // handleUpdate({ id: product._id, startingBid: formData.bid });
    clearForm();
  };

  // const handleUpdate = ({ id, data }) => {
  //   const bid = data;
  //   dispatch(updateBid(id, data));
  // };

  return (
    <div className="cardBorder productCard flex flex-col w-[300px] h-auto p-3">
      <div className="flex justify-center mb-5">
        <img
          className="object-cover w-full max-w-[7rem] h-[150px]"
          src={product.link}
          alt=""
        />
      </div>

      {outOfbiddingTime ? (
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-orange-500">SOLD OUT</h1>
        </div>
      ) : auth.isAdmin ? (
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
              <div className="mr-1">
                <TextField
                  onChange={handleChange}
                  fullWidth
                  name="bid"
                  label="bid"
                  value={formData.bid}
                  type="number"
                  inputProps={{ min: "0", step: "1" }} // Optional: to specify minimum value and step size
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40,
                      padding: 0,
                      width: 195,
                    },
                    "& .MuiInputLabel-root": { top: "-5px" },
                  }}
                />
              </div>

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

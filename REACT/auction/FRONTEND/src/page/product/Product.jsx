import "./Product.css";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { updateBid } from "../../state/productSlice";
import { updateBalance } from "../../state/slice";

let outOfbiddingTime = false;

const Product = ({ socket, product, handleSetleftBalance }) => {
  const dispatch = useDispatch();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.bid > auth.balance) {
      toast.error("Your balance is not enough");
      clearForm();
      return;
    } else if (formData.bid <= product.startingBid) {
      toast.error("You must bid higher");
      clearForm();
      return;
    }
    const result = await dispatch(
      updateBalance({
        balance: auth.balance - formData.bid,
      })
    );

    dispatch(updateBid({ id: product._id, startingBid: formData.bid }));
    //sending all the data coming from the client to server
    socket.emit("biddingAProduct", { product: { ...formData, ...product } });
    handleSetleftBalance(result.payload?.balance);
    clearForm();
  };

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

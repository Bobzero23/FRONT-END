import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

function Cart() {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 p-4">Price Details</p>
            <hr />
            <div className="space-y-3 mb-10 p-3">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$499</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className=" text-green-600">$49</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Deliver Charge</span>
                <span className=" text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className=" text-green-600">$5699</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full"
              sx={{ py: ".7rem", px: "2.5rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

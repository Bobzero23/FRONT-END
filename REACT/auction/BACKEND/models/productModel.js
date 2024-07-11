import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    startingBid: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);

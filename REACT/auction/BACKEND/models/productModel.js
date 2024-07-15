import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    startingBid: {
      type: Number,
      required: true,
    },
    finalBid: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);

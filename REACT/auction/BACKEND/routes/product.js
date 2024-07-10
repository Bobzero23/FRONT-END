import express from "express";
import { Product } from "../models/Product";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (!request.body.link || !request.body.startingBid) {
      return response.status(400).send("Fill all required fields");
    }

    const newProduct = {
      link: request.body.link,
      startingBid: request.body.startingBid,
    };

    const product = await Product.create(newProduct);

    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

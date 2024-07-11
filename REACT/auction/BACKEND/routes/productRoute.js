import express from "express";
import { Product } from "../models/productModel.js";

const router = express.Router();

//adding a new product
router.post("/", async (request, response) => {
  try {
    if (!request.body.link || !request.body.startingBid) {
      return response.status(400).send("Fill all required fields");
    }

    //mapping the properties to a new variable
    const newProduct = {
      link: request.body.link,
      startingBid: request.body.startingBid,
    };

    //creating a new entry in the database
    const product = await Product.create(newProduct);

    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//getting all the products
router.get("/", async (request, response) => {
  try {
    //getting all the products in the database
    const products = await Product.find({});
    return response.status(200).send(products);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

export default router;

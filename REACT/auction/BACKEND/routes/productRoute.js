import express from "express";
import { Product } from "../models/productModel.js";
import verifyToken from "./verifyToken.js";

const router = express.Router();

//adding a new product
router.post("/", verifyToken, async (request, response) => {
  try {
    if (
      !request.body.link ||
      !request.body.startingBid ||
      !request.body.finalBid
    ) {
      return response.status(400).send("Fill all required fields");
    }

    //mapping the properties to a new variable
    const newProduct = {
      link: request.body.link,
      startingBid: request.body.startingBid,
      finalBid: request.body.finalBid,
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
router.get("/", verifyToken, async (request, response) => {
  try {
    //getting all the products in the database
    const products = await Product.find({});
    return response.status(200).send(products);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

//update the bidding value
router.put("/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { startingBid } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { startingBid },
      { new: true }
    );

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;

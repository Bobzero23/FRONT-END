import express from "express";
import { User } from "../models/userModel.js";
import verifyToken from "./verifyToken.js";
const router = express.Router();

//update the user balance
router.put("/", verifyToken, async (req, res) => {
  const { balance } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { balance },
      { new: true }
    );

    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//update the user balance
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;

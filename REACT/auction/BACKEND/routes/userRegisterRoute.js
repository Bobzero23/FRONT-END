import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.username ||
      !request.body.email ||
      !request.body.password
    ) {
      console.log("There is a missing property");
      return response.send({
        message: "One of the property is missing",
        status: 400,
      });
    }

    const user = await User.findOne({ email: request.body.email });

    if (user) {
      return response.send({
        message: "This user already exist",
        status: 409,
      });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    const newUser = await User.create({
      ...request.body,
      password: hashedPassword,
    });

    const token = newUser.generateAuthToken();

    return response.status(201).send({
      data: token,
      userId: newUser._id,
      message: "User created successfully",
      balance: newUser.balance,
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return response.send({
      message: "There is an error while creating a new user",
      status: 500,
    });
  }
});

export default router;

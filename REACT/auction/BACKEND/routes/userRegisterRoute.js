import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const router = express.Router();

router.post("/", async (request, response) => {
  try {
    // const { error } = validate(request.body);
    // if (error) {
    //   console.log(error.details[0].message);
    //   return response.status(400).send({ message: error.details[0].message });
    // }

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

    console.log("Before finding a user");

    const user = await User.findOne({ email: request.body.email });

    if (user) {
      return response.send({
        message: "The user with the email already exist",
        status: 409,
      });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    const newUser = await new User({
      ...request.body,
      password: hashedPassword,
    });
    User.create(newUser);

    const createdUser = await User.findOne({ email: request.body.email });
    console.log(createdUser);
    console.log(request.body.email);
    const token = createdUser.generateAuthToken();

    return response.send({
      data: token,
      message: "User created successfully",
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

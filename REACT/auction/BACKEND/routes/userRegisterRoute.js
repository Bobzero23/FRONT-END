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
      return response
        .status(400)
        .send({ message: "One of the property is missing" });
    }

    console.log("Before finding a user");

    const user = await User.findOne({ email: request.body.email });
    console.log("Here is the email", request.body.email);

    if (user) {
      return response
        .status(409)
        .send({ message: "The user with the emial alredy exist" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    const newUser = await new User({
      ...request.body,
      password: hashedPassword,
    });
    User.create(newUser);

    return response.status(201).send("User registered");
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ message: "There is an error while creating a new user" });
  }
});

export default router;

import express from "express";
import { User, validate } from "../models/userModel";
import bcrypt from "bcrypt";

export const router = express.Router();

router.post("/", async (response, request) => {
  try {
    const { error } = validate(request.body);

    if (error) {
      return response.status(400).send({ message: error.details[0].message });
    }

    const user = User.findOne({ email: request.body.email });

    if (user) {
      return response
        .status(409)
        .send({ message: "The user with the give emial alredy exist" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    await new User({ ...request.body, password: hashedPassword });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ message: "There is an error while creating a new user" });
  }
});

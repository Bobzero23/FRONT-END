import express from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

export const router = express.Router();

router.post("/", async (response, request) => {
  try {
    const { error } = validate(request.body);

    if (error) {
      return response.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: request.body.email });

    if (!user) {
      return response
        .status(401)
        .send({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );

    if (!validPassword) {
      return response.status(401).send({ message: "Passowrd is incorrect" });
    }

    const token = user.generateAuthToken();

    return response.status(200).send({ message: "Logged in successfully!" });
  } catch (error) {
    console.log("Error happend while authenticating the user");
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  return schema.validate(data);
};

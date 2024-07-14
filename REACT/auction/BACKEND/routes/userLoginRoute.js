import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import Joi from "joi";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    console.log(request);
    if (!request.body.email || !request.body.password) {
      return response.send({
        message: "One of the property is missing",
        status: 400,
      });
    }

    const isAdmin =
      request.body.password === "415415" &&
      request.body.email === "Bobzero@gmail.com";

    const user = await User.findOne({ email: request.body.email });

    if (!user) {
      return response.send({
        message: "Invalid email or password",
        status: 401,
      });
    }

    const validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );

    if (!validPassword) {
      return response.send({ message: "Password is incorrect", status: 401 });
    }

    const token = user.generateAuthToken();

    return response.send({
      data: token,
      message: "Logged in successfully!",
      status: 200,
      isAdmin,
    });
  } catch (error) {
    console.log("Error happened while authenticating the user");
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  return schema.validate(data);
};

export default router;

import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//generating a token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

//creating a model
export const User = mongoose.model("User", userSchema);

//method to validate the coming request body
export const validate = (data) => {
  const schema = joi.object({
    username: joi.string().required().label("Username"),
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity.required().label("Password"),
  });

  return schema.validate(data);
};

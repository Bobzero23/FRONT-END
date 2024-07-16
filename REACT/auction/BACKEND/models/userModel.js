import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const generateRandomBalance = () => {
  return Math.floor(Math.random() * (500000 + 1)) + 500000;
};

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
  balance: {
    type: Number,
    default: generateRandomBalance,
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

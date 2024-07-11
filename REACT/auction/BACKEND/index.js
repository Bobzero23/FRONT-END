import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";

dotenv.config();
const app = express();

//initializing neccessary variables from .env file
const PORT = parseInt(process.env.PORT, 10);

//middleware for parsing the request body
app.use(express.json());
app.use("/product", productRoute);

mongoose
  //connecting to a database
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    // the server will only run if we are connected to the database
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("There is a problem with the connection");
    console.log(error);
  });

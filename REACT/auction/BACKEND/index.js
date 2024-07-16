import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
import userRegisterRoute from "./routes/userRegisterRoute.js";
import userLoginRoute from "./routes/userLoginRoute.js";
import userRoute from "./routes/userRoute.js";
import socketIO from "socket.io";

import http from "http";
import cors from "cors";

dotenv.config();
const app = express();

//initializing neccessary variables from .env file
const PORT = parseInt(process.env.PORT, 10);

//middleware for parsing the request body
app.use(express.json());
app.use(cors());
app.use("/product", productRoute);
app.use("/signup", userRegisterRoute);
app.use("/signin", userLoginRoute);
app.use("/user", userRoute);

mongoose
  //connecting to a database
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    // the server will only run if we are connected to the database
    const server = http.createServer(app); //intiating a server
    server.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
    const io = socketIO(server);
    server.listen();
  })
  .catch((error) => {
    console.log("There is a problem with the connection");
    console.log(error);
  });

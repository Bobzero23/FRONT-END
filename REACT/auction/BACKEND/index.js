import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hi Bob");
});

mongoose
  .connect(mongoDBURL)
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
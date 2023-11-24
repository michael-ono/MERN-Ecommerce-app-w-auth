import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
require("dotenv").config({ path: "../.env" });

const app  = express();

app.use(express.json());
app.use(cors());
  
app.use("/user", userRouter);

mongoose.connect("mongodb+srv://mongo-admin:enter1234@ecommerce.pzn9iwn.mongodb.net/ecommerce");

app.listen(8000, () => console.log("Server started sucessfully"))
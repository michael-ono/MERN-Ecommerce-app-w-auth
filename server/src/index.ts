import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";

const app  = express();

app.use(express.json());
app.use(cors);

app.use("/user", userRouter);

mongoose.connect(
    process.env.MONGODB_URI
);

app.listen(3001, () => console.log("Server started sucessfully"))
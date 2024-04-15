import express from "express";
import { connectMongodb } from "./database/connectMongodb.js";
import { userRouter } from "./controllers/user.controller.js";
import corsMiddleware from "./middlewares/corsOption.js";
import dotenv from "dotenv";
import { productRouter } from "./controllers/product.controller.js";

//
const app = express();

//
app.use(express.json());
app.use(corsMiddleware);
dotenv.config();
connectMongodb();
app.use(corsMiddleware);
app.use("/user", userRouter);
app.use("/product", productRouter);

//
const PORT = 8000;
app.listen(
  PORT,
  console.log(`🚀 ~ PORT: ${PORT}; running at http://localhost:${PORT}`)
);

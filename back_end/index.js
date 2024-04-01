import express from "express";
import { connectMongodb } from "./database/connectMongodb.js";

const app = express();
app.use(express.json());

connectMongodb();

const PORT = 8000;
app.listen(
  PORT,
  console.log(`🚀 ~ PORT: ${PORT}; running at http://localhost:${POSRT}`)
);

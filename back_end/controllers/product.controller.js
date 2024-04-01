import express from "express";
import { authMiddleware } from "../middlewares/validateToken.middleware.js";

const productRouter = express.Router();



export { productRouter };

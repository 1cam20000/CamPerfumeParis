import express from "express";
import {
  createProduct,
  findOneProduct,
  getDetailProduct,
  listAll,
} from "../services/product.service.js";
import { ObjectId } from "mongodb";

const productRouter = express.Router();
// productRouter.use(authMiddleware);

//create product
productRouter.post("/create", async (req, res) => {
  const { brand, nameProduct, rating, description, sold, price, image, type } =
    req.body;
  const newProduct = await createProduct({
    brand,
    nameProduct,
    rating,
    description,
    sold,
    price,
    image,
    type,
  });
  res.json(newProduct);
});

//list all product
productRouter.get("/list", async (req, res) => {
  const product = await listAll();
  console.log("🚀 ~ productRouter.get ~ product:", product);
  res.json(product);
});

//detail product
productRouter.get("/list/:id", async (req, res) => {
  console.log("🚀 ~ productRouter.get ~ req.params:", req.params);
  const objectId = new ObjectId(req.params);
  console.log("🚀 ~ productRouter.get ~ objectId:", objectId);
  const product = await getDetailProduct(objectId);
  res.json(product);
});

//add product to userProduct




export { productRouter };

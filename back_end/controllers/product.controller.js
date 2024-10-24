import express from "express";
import {
  createProduct,
  findOneProduct,
  getDetailProduct,
  listAll,
} from "../services/product.service.js";
import { ObjectId } from "mongodb";
import { authMiddleware } from "../middlewares/validateToken.middleware.js";
import { UserModel } from "../models/user.model.js";
import { ProductModel } from "../models/product.model.js";

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
productRouter.post("/add-to-card", authMiddleware, async (req, res) => {
  const { productId } = req.body;
  console.log("🚀 ~ productRouter.post ~ productId:", productId);
  const product = await findOneProduct({ _id: productId });
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  const user = await UserModel.findOne({ _id: req.user._id });
  const productExist = user.userProducts.find(
    (item) => item.toString() === productId
  );
  if (productExist) {
    return res.status(400).json({ message: "product already exist" });
  }
  await UserModel.findByIdAndUpdate(req.user._id, {
    $push: { userProducts: product },
  });
  res.json({ message: "add product to card success" });
});

// list product in userProduct
productRouter.get("/list-product-in-card", authMiddleware, async (req, res) => {
  const user = await UserModel.findOne({ _id: req.user._id }).populate({
    path: "userProducts",
    model: "product",
  });
  res.json(user.userProducts);
});

//xoa sp 
productRouter.delete("/remove-from-card", authMiddleware, async (req, res) => {
  const { productId } = req.body;
  const user = await UserModel.findOne({ _id: req.user._id });
  const index = user.userProducts.findIndex(
    (item) => item.toString() === productId
  );
  if (index === -1) {
    return res
      .status(404)
      .json({ message: "Product not found in user's card" });
  }

  user.userProducts.splice(index, 1);
  await user.save();

  res.json({ message: "Remove product from card success" });
});
// Tìm kiếm phim theo tên
productRouter.post("/search", async (req, res) => {
  const { keyword } = req.body;
  try {
    const products = await ProductModel.find({
      nameProduct: { $regex: keyword, $options: "i" },
    }); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//
export { productRouter };

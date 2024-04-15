import { ProductModel } from "../models/product.model.js";
//list all product
const listAll = async () => {
  const product = await ProductModel.find();
  console.log("🚀 ~ listAll ~ product:", product);
  return product;
};
const createProduct = async (data) => {
  const product = await ProductModel.create(data);
  return product;
};
const findOneProduct = async (query) => {
  const product = await ProductModel.findOne(query).exec();
  return product;
};
//get product by _id
const getDetailProduct = async (params) => {
  const product = await ProductModel.find(params).exec();
  console.log("🚀 ~ getDetailProduct ~ product:", product);
  return product;
};

export { listAll, createProduct, findOneProduct, getDetailProduct };

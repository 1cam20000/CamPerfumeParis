import { ProductModel } from "../models/product.model.js";
//list all product
const listAll = async () => {
  const product = await ProductModel.find();
  return product;
};
//list all perfume

export { listAll };

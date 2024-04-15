import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    brand: String,
    nameProduct: String,
    rating: String,
    description: String,
    sold: Number,
    price: String,
    image: String,
    type: String,
    isDelete: {
      type: Boolean,
      default: false,
    },
    productUser: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);

export { ProductSchema, ProductModel };

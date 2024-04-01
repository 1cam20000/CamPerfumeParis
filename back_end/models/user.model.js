import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    email: String,
    password: String,
    name: String,
    age: Number,
    phone: String,
    address: String,
    birth: String,
    gender: String,
    userProducts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.Model("User", UserSchema);

export { UserSchema, UserModel };

import mongoose from "mongoose";

const connectMongodb = async () => {
  mongoose
    .connect("")
    .then(() => console.log("🚀 ~ connected!!!"))
    .catch((err) => console.log("🚀 ~ error: ", err));
};

export { connectMongodb };

import mongoose from "mongoose";

const connectMongodb = async () => {
  mongoose
    .connect(
      "mongodb+srv://cananhminh:Anhminhcam89@cluster0.0vaoaea.mongodb.net/project_perfume"
    )
    .then(() => console.log("🚀 ~ connected!!!"))
    .catch((err) => console.log("🚀 ~ error: ", err));
};

export { connectMongodb };

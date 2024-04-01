import { UserModel } from "../models/user.model.js";

//create user
const createUser = async (body) => {
  const user = await UserModel.create(body);
  return user;
};

//findOneUser to  check email existed
const findOneUser = async (query) => {
  const user = await UserModel.findOne(query).select("-password").exec();
  return user;
};

export { createUser, findOneUser };

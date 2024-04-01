import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findOneUser } from "../services/user.service.js";

const userRouter = express.Router();
//resister
userRouter.post("/resister", async (req, res) => {
  const { email, password, name, phone, address, birth, gender, age } =
    req.body;
  const emailExisted = findOneUser({ email });
  if (emailExisted) {
    return res.status(400).json({ message: "email already exists" });
  } else {
    const passwordHash = bcrypt.hash(password);
    const newUser = await createUser({
      password: passwordHash,
      name,
      phone,
      address,
      birth,
      gender,
      age,
      email,
    });
    res.json(`user created!!! : ${newUser}`);
  }
});
//login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //tim kiem dang nhap theo email
  const user = await findOneUser({ email });
  //neu email ton tai
  if (user) {
    //kiem tra pass - so sanh : compare
    const checkPass = bcrypt.compare(password, user.password);
    //neu pass dung
    if (checkPass) {
      const { name, phone, address, birth, gender, age, email } = user;
      //create payload
      const payload = {
        name,
        phone,
        address,
        birth,
        gender,
        age,
        email,
      };
      //create token
      const token = jwt.sign(payload, process.env.KEY_TOKEN, {
        expiresIn: "1h",
      });
      //tra ve token cho nguoi dung de goi cac api san phan
      res.json(token);
    }
    //neu pass sai
    else {
      res.status(400).json({ message: "password is incorrect" });
    }
  }
  //neu k ton tai email
  else {
    res.status(400).json({ message: "email is incorrect" });
  }
});
export { userRouter };

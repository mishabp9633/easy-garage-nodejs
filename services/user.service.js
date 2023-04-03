// import { db } from "./../database/connection.js";
import userModel from "../models/user.model.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { HttpException } from "../exceptions/exceptions.js";

export async function createNewUser(userData) {
  const user = await userModel.findOne({ email: userData.email });

  if (user) return "already registered";

  let password = userData.password;
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  userData.password = password;
  const result = await userModel.create({ ...userData });
  return { result };
}

export async function login(loginData) {
  let user = await userModel.findOne({ email: loginData.email, role: "user" });
  // if (!user) return "invalid customer email";
  if (!user) throw new HttpException(400, "invalid customer email");

  let validPassword = await bcrypt.compare(loginData.password, user.password);
  // if (!validPassword) return "invalid password";
  if (!validPassword) throw new HttpException(400, "invalid password!");

  var token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

  return { token };
}

export async function checkAdminLogin(loginData) {
  let user = await userModel.findOne({ email: loginData.email, role: "admin" });
  // if (!user) return "invalid admin email";
  if (!user) throw new HttpException(400, "invalid admin email!");

  let validPassword = await bcrypt.compare(loginData.password, user.password);
  console.log(validPassword);
  // if (!validPassword) return "invalid password";
  if (!validPassword) throw new HttpException(400, "invalid password!");

  var token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

  return { token };
}

export async function findAllUsers() {
  const users = await userModel.find({ role: "user" }, { password: 0 });
  return { users };
}

export async function getUser(id) {
  const userDetails = await userModel.findById(
    id,
    {},
    { projection: { password: 0 } }
  );
  if (!userDetails) {
    throw new HttpException(400, "no user with his id!");
  } else return { userDetails };
}

export async function deletedUser(id) {
  const deletedUser = await userModel.findByIdAndDelete(id);
  return { deletedUser };
}

export async function updateUser(userId, userData) {
  const updatedUser = await userModel.findByIdAndUpdate(userId, userData, {
    new: true,
  });

  return { updatedUser };
}

export async function getUserById(userId) {
  let user = await userModel.findOne({ _id: userId });
  return user;
}

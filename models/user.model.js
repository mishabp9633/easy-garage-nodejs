import mongoose from "mongoose";
import { isValidMobileNumber } from "../utils/util.js";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    validate: {
      validator: (v) => isValidMobileNumber(v),
      message: "invalid mobile number",
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  pincode: {
    type: String,
  },
}, {timestamps: true});

const model = mongoose.model("User", userSchema);

export default model;

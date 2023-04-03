import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  stock: {
    type: String,
    default: 0
  },
  price: {
    type: String,
    required: true,
    default: 0
  },
  expiryDate: {
    type: String,
  },
}, {timestamps: true});
const model = mongoose.model("Product", productSchema);

export default model;

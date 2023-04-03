import mongoose from "mongoose";

const storeBillSchema = new mongoose.Schema({
  
  jobCard: {
    type: String,
    ref:"JobCard"
  },
  items:[
    {
      product: {
        type: String,
        ref:"Product"
      },
      name: {
        type: String
      },
      price: {
        type: Number,
        default: 0
      },
      quantity: {
        type: Number,
        default: 0
      }
    }
  ],
  subTotal: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  totalPrice: {
    type: Number,
    default: 0
  }
  
});
const model = mongoose.model("StoreBill", storeBillSchema);

export default model;

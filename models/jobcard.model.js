import mongoose from "mongoose";

const jobCardSchema = new mongoose.Schema({
  customer: {
    type: String,
    ref: "User",
  },
  vehicle: {
    type: String,
    ref: "Vehicle",
  },
  services: [
    {
      type: String,
      ref: "Service",
    }
  ],
  staffs: [
    {
      type: String,
      ref: "Staff",
    }
  ],
  storeBills: [
    {
      type: String,
      ref: 'StoreBill'
    }
  ],
  totalStoreBillAmount: {
    type: Number,
    default: 0
  },
  totalServiceCharge: {
    type: Number,
    default: 0
  },
  extraCharges: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    default: 0
  }
}, {timestamps: true});
const model = mongoose.model("JobCard", jobCardSchema);

export default model;

import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  customer: {
    type: String,
    ref:"User",
  },
  model: {
    type: String,
  },
  companyName: {
    type: String,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  manufacturingYear: {
    type: String,
  },
  vehicleType: {
    type: String,
  },
}, {timestamps: true});
const model = mongoose.model("Vehicle", vehicleSchema);

export default model;

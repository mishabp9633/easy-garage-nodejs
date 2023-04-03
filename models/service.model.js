import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  }, 
  price: {
    type: String,
    required:true,
  },
  duration: {
    type: String,
    // required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  
}, {timestamps: true});

const model = mongoose.model("Service", serviceSchema);

export default model;

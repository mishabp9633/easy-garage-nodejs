import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
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
  date: {
    type: String,
  },
  status:{
    type: String,
    default: 'pending'
  }
},{timestamps:true});
const model = mongoose.model("Booking", bookingSchema);

export default model;

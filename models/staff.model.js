import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  address: {
    type: String,
  },
  place: {
    type: String,
  },
  category: {
    type: String,
    // enum : {
    //   values: ['permenent, temporary']
    // }
  },
  department: {
    type: String,
  },
  salary: {
    type:String,
  },
});
const model = mongoose.model("Staff", staffSchema);

export default model;

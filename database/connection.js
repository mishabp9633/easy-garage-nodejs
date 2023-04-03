import { mongoose } from "mongoose";
mongoose.set("strictQuery", false);
const connection_string =
  "mongodb://easygaragedb:osdev2023easygarage@139.59.67.58:27017/easygarage?authSource=easygarage";

export async function initialize() {
  try {
    await mongoose.connect(connection_string);
    console.log("db connected");
  } catch {
    throw err;
  }
}

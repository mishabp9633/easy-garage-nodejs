import { HttpException } from "../exceptions/exceptions.js";
import vehicleModel from "../models/vehicle.model.js";

export async function createNewVehicle(vehicleData) {
  const vehicle = await vehicleModel.create({ ...vehicleData });

  return { vehicle };
}

export async function findAllVehicle() {
  const vehicles = await vehicleModel.find().populate("customer");
  return { vehicles };
}

export async function getVehicleDetail(id) {
  const vehicle = await vehicleModel.findById(id)
  .populate("customer", "name");
  if(!vehicle) {
    return {"message": 'No user with this id'}
  } else return { vehicle };
}

export async function getVehicleDetailByUserId(userId) {
  const vehicles = await vehicleModel.find({customer: userId})
  .populate("customer", "name");
  if(!vehicles) {
    return {"message": 'No user with this id'}
  } else return { vehicles };
}

export async function deletedVehicle(id) {
  const Vehicle = await vehicleModel.findByIdAndDelete(id);
  return { Vehicle };
}

export async function updateVehicles(vehicleId, vehicleData) {
  const updatedVehicle = await vehicleModel.findByIdAndUpdate(
    vehicleId,
    vehicleData,
    { new: true }
  );
 return { updatedVehicle };
  }

 export async function updateVehiclesById(userId, vehicleId, vehicleData) {

  const vehicle = await vehicleModel.findOne({customer: userId, _id: vehicleId})
  if(!vehicle) throw HttpException('400', "No vehicle")

  const updatedVehicle = await vehicleModel.findByIdAndUpdate(
    vehicle._id,
    vehicleData,
    { new: true }
  );
 return { updatedVehicle };
  }

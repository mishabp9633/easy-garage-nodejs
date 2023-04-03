import {
  deletedVehicle,
  findAllVehicle,
  getVehicleDetail,
  createNewVehicle,
  updateVehicles,
  getVehicleDetailByUserId,
  updateVehiclesById,
} from "../services/vehicle.service.js";

export async function createVehicle(req, res, next) {
  const vehicleData = req.body;
  try {
    const newVehicle = await createNewVehicle(vehicleData);
    res.send(newVehicle);
  } catch (err) {
    next({err});
  }
}

export async function createVehicleByUser(req, res, next) {
  const vehicleData = req.body;
  try {
    const newVehicle = await createNewVehicle(vehicleData);
    res.send(newVehicle);
  } catch (err) {
    next({err});
  }
}

export async function getAllVehicles(req, res, next) {
  try {
    const allVehicle = await findAllVehicle();
    res.send(allVehicle);
  } catch (err) {
    next({err});
  }
}

export async function getVehicleDetailsById(req, res, next) {
  try {
    const vehicleDetails = await getVehicleDetail(req.params.id);
    res.send(vehicleDetails);
  } catch (err) {
    next({err});
  }
}
export async function getVehicleDetailsByToken(req, res, next) {
  const userId = req.body.user._id;
  try {
    const vehicleDetails = await getVehicleDetailByUserId(userId);
    res.send(vehicleDetails);
  } catch (err) {
    next({err});
  }
}

export async function deleteVehicle(req, res, next) {
  try {
    const vehicleDetails = await deletedVehicle(req.params.id);
    res.send(vehicleDetails);
  } catch (err) {
    next({err});
  }
}

export async function updateVehicleById(req, res, next) {
  try {
    const vehicleId = req.params.id;
    const vehicleData = req.body;
    const update = await updateVehicles(vehicleId, vehicleData);

    res.send(update);
  } catch (err) {
    next({err});
  }
}
export async function updateVehicleByToken(req, res, next) {
  const userId = req.body.user._id;
  const vehicleId = req.params.id;
  const vehicleData = req.body;
  try {
    const update = await updateVehiclesById(userId, vehicleId, vehicleData);
    res.send(update);
  } catch (err) {
    next({err});
  }
}

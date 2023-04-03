import express from "express";
import {
  createVehicle,
  createVehicleByUser,
  deleteVehicle,
  getAllVehicles,
  getVehicleDetailsById,
  getVehicleDetailsByToken,
  updateVehicleById,
  updateVehicleByToken
} from "../controllers/vehicle.controller.js";
import { adminMiddleware, userMiddleware } from "../middlewares/user.middleware.js";
import { vehicleMiddleware } from "../middlewares/vehicle.middleware.js";

const router = express.Router();

const path = "/vehicle";


// ------admin-------

router.get(`${path}/all`,adminMiddleware, getAllVehicles);
router.post(`${path}/create`,adminMiddleware, vehicleMiddleware, createVehicle);
router.get(`${path}/:id`,adminMiddleware, getVehicleDetailsById);
router.put(`${path}/admin/:id`, vehicleMiddleware, updateVehicleById);
router.delete(`${path}/:id`,adminMiddleware, deleteVehicle);

// ------user-------

router.get(`${path}`,userMiddleware, getVehicleDetailsByToken);
router.put(`${path}/update`, userMiddleware, vehicleMiddleware, updateVehicleByToken);
router.post(`${path}/new`,userMiddleware, vehicleMiddleware, createVehicleByUser);

export default router;

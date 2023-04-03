import express from "express";
import {
  createStaff,
  deleteStaff,
  getAllStaffs,
  getStaffDetails,
  updateStaff,
} from "../controllers/staff.controller.js";
import { adminMiddleware } from "../middlewares/user.middleware.js";
import { staffMiddleware } from "./../middlewares/staff.middleware.js";
const router = express.Router();

const path = "/staff";

router.post(`${path}/create`,adminMiddleware, staffMiddleware, createStaff);
router.get(`${path}/all`,adminMiddleware, getAllStaffs);
router.get(`${path}/:id`,adminMiddleware, getStaffDetails);
router.put(`${path}/:id`, adminMiddleware,staffMiddleware,updateStaff);
router.delete(`${path}/:id`,adminMiddleware, deleteStaff);

export default router;

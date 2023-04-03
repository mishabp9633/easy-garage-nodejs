import express from "express";
import {
  createBooking,
  deleteBooking,
  deleteBookingByToken,
  getAllBooking,
  getBookingDetailsById,
  getBookingDetailsByToken,
} from "../controllers/booking.controller.js";
import { adminMiddleware, userMiddleware } from "./../middlewares/user.middleware.js";

const router = express.Router();

const path = "/booking";

router.post(`${path}/new`, createBooking);
router.get(`${path}/all`,adminMiddleware, getAllBooking);
router.get(`${path}/:id`,adminMiddleware, getBookingDetailsById);
router.get(`${path}`, userMiddleware, getBookingDetailsByToken);
router.delete(`${path}/:id`, adminMiddleware, deleteBooking);
router.delete(`${path}`, userMiddleware, deleteBookingByToken);

export default router;

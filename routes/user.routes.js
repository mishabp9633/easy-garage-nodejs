import express from "express";
import {
  adminLogin,
  createUser,
  customerLogin,
  deleteUser,
  getAllUser,
  getUserDetailsByUserId,
  getUserDetailsByToken,
  updateUserById,
  updateUserByToken
} from "../controllers/user.controller.js";
import { userDataMiddleware, adminMiddleware, userMiddleware } from "./../middlewares/user.middleware.js";

const router = express.Router();
const path = "/user";

// ------admin-------

router.post(`${path}/admin/login`, adminLogin);
router.get(`${path}/all`, adminMiddleware, getAllUser);
router.get(`${path}/:id`, adminMiddleware, getUserDetailsByUserId);
router.post(`${path}/admin/new`, adminMiddleware, userDataMiddleware, createUser);
router.delete(`${path}/:id`, adminMiddleware, deleteUser);
router.put(`${path}/admin/:id`, adminMiddleware, userDataMiddleware, updateUserById);

// ------user-------

router.post(`${path}/customer/login`, customerLogin);
router.get(`${path}`, userMiddleware, getUserDetailsByToken);
router.put(`${path}/update`, userMiddleware, userDataMiddleware, updateUserByToken);

export default router;

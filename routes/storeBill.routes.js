import express from "express";
import { createStoreBill, getStoreBill } from "../controllers/storeBill.controller.js";
import { adminMiddleware } from "../middlewares/user.middleware.js";

const router = express.Router();

const path = "/storeBill";

// -----admin--------

router.post(`${path}/create`,adminMiddleware, createStoreBill);
router.get(`${path}/:id`,adminMiddleware, getStoreBill);



export default router;
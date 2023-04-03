import express from "express";
import { createJobCard, getAllJobCard, getJobCardDetails, getJobCardDetailsToken, updateJobCardDetails } from "../controllers/jobCard.controller.js";
import { adminMiddleware, userMiddleware } from "../middlewares/user.middleware.js";

const router = express.Router();

const path = "/jobCard";

// ------admin-------

router.post(`${path}/create`,adminMiddleware, createJobCard);
router.get(`${path}/all`,adminMiddleware, getAllJobCard);
router.get(`${path}/:id`,adminMiddleware, getJobCardDetails);
router.put(`${path}/:id`,adminMiddleware, updateJobCardDetails);

// ------user-------
router.get(`${path}`,userMiddleware, getJobCardDetailsToken);


export default router;
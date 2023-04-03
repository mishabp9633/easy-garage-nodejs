import express from "express";
import {
  createService,
  deleteService,
  getAllservices,
  getServiceDetails,
  updateService,
} from "../controllers/service.controller.js";

const router = express.Router();

const path = "/service";

router.post(`${path}/create`, createService);
router.get(`${path}/all`, getAllservices);
router.get(`${path}/:id`, getServiceDetails);
router.put(`${path}/:id`, updateService);
router.delete(`${path}/:id`, deleteService);

export default router;

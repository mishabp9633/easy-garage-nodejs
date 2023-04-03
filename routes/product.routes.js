import express from "express";
import { createStoreItem, deleteStoreItem, getAllStoreItem, getStoreItem, updateStoreItem } from "../controllers/product.controller.js";
import { productMiddleware } from '../middlewares/product.middleware.js';
import { adminMiddleware } from "../middlewares/user.middleware.js";

const router = express.Router();

const path = "/product";

router.post(`${path}/create`,adminMiddleware, productMiddleware,createStoreItem);
router.get(`${path}/all`,adminMiddleware, getAllStoreItem);
router.get(`${path}/:id`,adminMiddleware, getStoreItem);
router.delete(`${path}/:id`,adminMiddleware, deleteStoreItem);
router.put(`${path}/:id`,adminMiddleware,productMiddleware, updateStoreItem);






export default router;
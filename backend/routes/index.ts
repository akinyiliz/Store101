import express from "express";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";

const router = express.Router();

// User Routes
router.use("/user", userRoutes);

// Product Routes
router.use("/product", productRoutes);

export default router;

import express from "express";

import {
  getProducts,
  getSingleProduct,
} from "../controllers/product.controllers";

const router = express.Router();

router.get("/", getProducts);

router.get("/product/:id", getSingleProduct);

export default router;

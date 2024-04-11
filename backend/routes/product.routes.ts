import express from "express";

import {
  getProducts,
  getSingleProduct,
  getAllCategories,
  getProductsInSpecificCategory,
  uploadImage,
  addProduct,
  deleteProduct,
} from "../controllers/product.controllers";
import upload from "../services/upload";

const router = express.Router();

router.get("/all", getProducts);

router.post("/image/upload", upload.single("image"), uploadImage);

router.post("/add", addProduct);

router.delete("/delete/:id", deleteProduct);

// router.get("/:id", getSingleProduct);

// router.get("/categories", getAllCategories);

// router.get("/category/:category", getProductsInSpecificCategory);

export default router;

import { Request, Response } from "express";

import Product from "../models/product";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

export const uploadImage = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      image_url: `http://localhost:${PORT}/images/${req.file?.filename}`,
    });
  } catch (error: any) {
    console.error("Error when fetching products", error);
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});

    res.status(200).json({ success: true, products: products });
  } catch (error: any) {
    console.error("Error when getting products", error);
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { id, title, price, description, category, image, rate, reviews } =
    req.body;

  try {
    const products = await Product.find({});

    let newId;

    if (products.length > 0) {
      let arrOfLastProduct = products.slice(-1);
      let lastProduct = arrOfLastProduct[0];

      newId = lastProduct.id + 1;
    } else {
      newId = 1;
    }

    const product = new Product({
      id: newId,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      rate: rate,
      reviews: reviews,
    });

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      product_name: product.title,
    });
  } catch (error: any) {
    console.error("Error when getting products", error);
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await Product.findOneAndDelete({ id: id });

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      product_id: id,
    });
  } catch (error: any) {
    console.error("Error when getting products", error);
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getSingleProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await response.json();

    res.status(200).json({ success: true, product: data });
  } catch (error: any) {
    console.error("Error when fetcing single product", error);
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  // res.status(200).json({ success: true, categories: "categories" });

  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    const data = await response.json();

    res.status(200).json({ success: true, categories: data });
  } catch (error: any) {
    console.error("Error when fetcing product categories", error);
    res.status(error.status).json({ success: false, message: error.message });
  }
};

export const getProductsInSpecificCategory = async (
  req: Request,
  res: Response
) => {
  const category = req.params.category;
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    const data = await response.json();

    res.status(200).json({ success: true, products: data });
  } catch (error: any) {
    console.error("Error when fetcing products", error);
    res.status(error.status).json({ success: false, message: error.message });
  }
};

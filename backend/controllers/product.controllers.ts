import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    res.status(200).json({ success: true, products: data });
  } catch (error: any) {
    console.error("Error when fetcing products", error);
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

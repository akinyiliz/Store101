import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rate: { type: Number, required: true },
  reviews: { type: Number, required: true },
  available: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

const Product = mongoose.model("products", productSchema);

export default Product;

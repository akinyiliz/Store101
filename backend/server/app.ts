import dotenv from "dotenv";
import express from "express";
import cors, { CorsOptions } from "cors";

import connectDB from "../config/db";
import userRoutes from "../routes/user.routes";

dotenv.config();

const app = express();

// Cross-Origin Resource Sharing
const allowedOrigins: string[] = [
  "http://localhost:3000",
  "http://localhost:3001",
];

const options: CorsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

app.use(cors(options));

// db connection
connectDB();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/auth/users", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

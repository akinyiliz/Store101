import express from "express";

import connectDB from "../config/db";
import userRoutes from "../routes/user.routes";

const app = express();

// db connection
connectDB();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth/users", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

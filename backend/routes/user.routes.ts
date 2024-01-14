import dotenv from "dotenv";
import express from "express";

import { register } from "../controllers/user.controllers";

dotenv.config();
const router = express.Router();

router.post("/register", register);

export default router;

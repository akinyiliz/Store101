import dotenv from "dotenv";
import express from "express";

import { login, register, users } from "../controllers/user.controllers";

dotenv.config();
const router = express.Router();

router.get("/", users);

router.post("/register", register);

router.post("/login", login);

export default router;

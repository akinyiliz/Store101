import bcrypt from "bcryptjs";
import { Request, Response } from "express";

import User from "../models/user";

export const register = async (req: Request, res: Response) => {
  const userDetails = req.body;

  try {
    const usernameExists = await User.findOne({
      username: userDetails.username,
    });
    const emailExists = await User.findOne({ email: userDetails.email });

    if (usernameExists) {
      return res.status(409).json({
        success: false,
        message: "User with that username already exists.",
      });
    }

    if (emailExists) {
      return res.status(409).json({
        success: false,
        message: "User with that email already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userDetails.password, salt);

    userDetails.password = hashedPassword;

    const user = await User.create(userDetails);
    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Internal server error. Try again later.",
    });
  }
};

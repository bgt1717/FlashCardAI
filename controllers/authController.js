import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    res.json({
      message: "Register endpoint working",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
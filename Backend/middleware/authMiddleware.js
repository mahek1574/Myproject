const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, login required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.role === "admin") {
      if (decoded.id === "hardcoded-admin") {
        req.user = { _id: "hardcoded-admin", username: process.env.ADMIN_USERNAME || "admin", role: "admin" };
      } else {
        const mongoose = require("mongoose");
        if (mongoose.connection.readyState !== 1) {
          return res.status(503).json({ message: "Database is offline. Auth verification unavailable." });
        }
        const admin = await Admin.findById(decoded.id).select("-password");
        if (admin) {
          req.user = admin.toObject();
          req.user.role = "admin";
        }
      }
    
      req.admin = req.user;
    } else if (decoded.role === "user") {
      const mongoose = require("mongoose");
      if (mongoose.connection.readyState !== 1) {
        return res.status(503).json({ message: "Database is offline. Auth verification unavailable." });
      }
      const user = await User.findById(decoded.id).select("-password");
      if (user) {
        req.user = user.toObject();
        req.user.role = "user";
      }
    }

    if (!req.user) {
      return res.status(401).json({ message: "Not authorized, account not found" });
    }

    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

module.exports = { protect };

const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};


router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const mongoose = require("mongoose");
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ message: "Database is currently offline. Signup is unavailable." });
  }

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

  
    const adminExists = await Admin.findOne({ username });
    if (adminExists) {
      return res.status(400).json({ message: "Admin username already exists" });
    }

  
    const admin = await Admin.create({
      username,
      password,
    });

    if (admin) {
      const token = generateToken(admin._id, "admin");

    
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        role: "admin",
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/user/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const mongoose = require("mongoose");
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ message: "Database is currently offline. User registration is unavailable." });
  }

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

  
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User email already exists" });
    }

    
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      const token = generateToken(user._id, "user");

      
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000, 
      });

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: "user",
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("User signup error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  const loginInput = username || email;

  try {
    if (!loginInput || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

  
    const envAdminUser = process.env.ADMIN_USERNAME || "admin";
    const envAdminPass = process.env.ADMIN_PASSWORD || "admin123";
    if (loginInput.toLowerCase() === envAdminUser.toLowerCase() && password === envAdminPass) {
      const token = generateToken("hardcoded-admin", "admin");

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.json({
        _id: "hardcoded-admin",
        username: envAdminUser,
        role: "admin",
      });
    }


    const mongoose = require("mongoose");
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: "Database is currently offline. Only fallback admin account can log in." });
    }

  
    const admin = await Admin.findOne({ username: loginInput.toLowerCase() });
    if (admin) {
      const isMatch = await admin.comparePassword(password);
      if (isMatch) {
        const token = generateToken(admin._id, "admin");

        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        return res.json({
          _id: admin._id,
          username: admin.username,
          role: "admin",
        });
      }
    }


    const user = await User.findOne({ email: loginInput.toLowerCase() });
    if (user) {
      const isMatch = await user.comparePassword(password);
      if (isMatch) {
        const token = generateToken(user._id, "user");

        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        return res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: "user",
        });
      }
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/logout", protect, (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  res.status(200).json({ message: "Logged out successfully" });
});


router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;

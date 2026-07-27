const mongoose = require("mongoose");
const Admin = require("../models/Admin");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    
    const defaultUsername = process.env.ADMIN_USERNAME || "admin";
    const defaultPassword = process.env.ADMIN_PASSWORD || "admin123";

    const adminExists = await Admin.findOne({ username: defaultUsername });
    if (!adminExists) {
      await Admin.create({
        username: defaultUsername,
        password: defaultPassword,
      });
      console.log(`Default admin account seeded successfully. Username: ${defaultUsername}`);
    } else {
      console.log(`Admin account '${defaultUsername}' already exists. Skipping seeding.`);
    }
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    console.error("The backend server will remain running, but database operations will fail until MongoDB is started.");
  }
};

module.exports = connectDB;


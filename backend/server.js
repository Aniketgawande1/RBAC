require("dotenv").config();
const express = require("express");
 // Correct way to load dotenv

// // Debugging: Check if environment variables are loaded
// console.log("MONGODB_URL:", process.env.MONGODB_URL);

const app = express();
const db = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");

// Connect to database
db();

// Middleware
app.use(express.json());

// Setup routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {   
    console.log(`Server is running at port ${PORT}`); 
});

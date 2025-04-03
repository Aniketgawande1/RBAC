require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
const db = require("./config/db");

// Import routes

// Connect to database
db();

// Middleware
app.use(express.json());

// Setup routes
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {   
    console.log(`Server is running at port ${PORT}`); 
});

// const express = require("express");
// const dotenv = require("dotenv").config();
// // Make sure dotenv is loaded before requiring files that use process.env
// console.log("MONGO_URL:", process.env.MONGO_URL); // Add this debug line
// const app = express();
// const db = require("./config/db");
// // const cors = require("cors");

// db();
// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// app.listen(PORT,()=>{  console.log(`server is running  at port ${PORT}`);

// })
require("dotenv").config();  // Load dotenv at the very top
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Debugging: Check if MONGO_URL is loaded


// Connect to DB
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
   

});

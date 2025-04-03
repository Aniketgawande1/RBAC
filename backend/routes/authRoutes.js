// const express = require("express");
// const { register, login } = require("../controllers/authController");
// const router = express.Router();

// // Corrected route paths with a slash and the correct method
// router.post("/register", register);
// router.post("/login", login);

// module.exports = router;
const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// ✅ Fixed missing slashes and incorrect method
router.post("/register", register);
router.post("/login", login);

module.exports = router;

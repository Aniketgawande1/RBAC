const express = require("express");
const router = express.Router(); // ✅ Use express.Router()
const verifyToken =require("../middlewares/authMiddleware")
const authorizeRoles = require("../middlewares/roleMiddleware")
// Corrected routes
router.get("/admin",verifyToken,authorizeRoles("admin", "manager"), (req, res) => {
    res.json({ message: "Welcome Admin" });
});
router.get("/manager", (req, res) => { // ✅ Fixed "manager" spelling
    res.json({ message: "Welcome Manager" });
});
router.get("/user",  verifyToken ,(req, res) => {
    res.json({ message: "Welcome User" });
});

module.exports = router; // ✅ Correct export

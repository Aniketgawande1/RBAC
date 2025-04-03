const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const register = async(req, res) => {
   const {username, password, role} = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);

   try {
       const newUser = new User({
           username, password: hashedPassword, role
       });
       await newUser.save();
       res
       .status(201)
       .json({message: `User register with username ${username}`})
   } catch(error) {  
       res.status(500).json({message: "Internal server error"})
   }
}

const login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token = jwt.sign(
            { id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )
        res.status(200).json({token})
    } catch(error) {
        return res.status(500).json({message: "Internal server error"})
    }
};

module.exports = {
    register,
    login
 };
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// const register = async (req, res) => {
//    console.log("Register route hit!");  // Debugging log

//    try {
//        const { username, password, role } = req.body;
       
//        if (!username || !password || !role) {
//            return res.status(400).json({ message: "All fields are required" });
//        }

//        const existingUser = await User.findOne({ username });
//        if (existingUser) {
//            return res.status(400).json({ message: "Username already exists" });
//        }

//        const hashedPassword = await bcrypt.hash(password, 10);
//        const newUser = new User({ username, password: hashedPassword, role });

//        await newUser.save();
//        res.status(201).json({ message: `User registered with username ${username}` });
//    } catch (error) {
//        console.error("Error registering user:", error);
//        res.status(500).json({ message: "Internal server error" });
//    }
// };

// const login = async (req, res) => {
//     try {
//         const { username, password } = req.body;
        
//         if (!username || !password) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.status(200).json({ token });
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// module.exports = { register, login };

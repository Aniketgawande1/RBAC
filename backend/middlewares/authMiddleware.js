const jwt = require ("jsonwebtoken");
 const verifyToken = (req,res,next) =>{
    let token ;
    let authHeader = req.headers.Authorization || req.headers.authHeader
    if (authHeader && authHeader.startswith("Bearer")){
        token = authHeader.split("")[1];
    
    if (!token){
        return res
        .status(401)
        .json({message:"No token , authorization denied"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("The decoded user is : ", req.user);
        next();
    }catch(error){
        return res
        .status(401)
        .json({message:"Token is not valid"})
    }
  }else{
    return res
        .status(401)
        .json({message:"No token , authorization denied"})
  }
 }
 module.exports = verifyToken;
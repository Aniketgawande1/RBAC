// const mongoose = require('mongoose');

// const db = async () => {
//     try{
//         // Make sure this matches the name in your .env file
//         const connect = await mongoose.connect(process.env.MONGO_URL);
//         console.log(`Database Connected : ${connect.connection.host}, ${connect.connection.port}, ${connect.connection.name}`); 
//     }
//     catch(error){
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }   
// };

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Database Connected: ${connect.connection.host}, ${connect.connection.name}`); 
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = connectDB;


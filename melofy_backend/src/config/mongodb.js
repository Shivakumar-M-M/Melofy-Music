// import mongoose from "mongoose";

// // Remove "MONGO_URL=" from the string

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/music", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//     console.log("Connected to MongoDB Successfully!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };


// export default connectDB;


import mongoose from "mongoose";

// MongoDB connection string (simplified)
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://shivakumarmm1732004:kIDjwhB01wLiXhM1@lost-found.8hb8vll.mongodb.net/?retryWrites=true&w=majority&appName=Lost-Found", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log("Connected to MongoDB Successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;

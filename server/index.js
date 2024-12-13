import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";
import bodyParser from "body-parser";



import userRoutes from './routes/User.js';   // Import routes with 'import'
import adminRoutes from './routes/adminRoutes.js';  // Import admin routes
import trainerRoutes from './routes/trainerRoute.js';  // Import trainer routes

import colors from 'colors';  // Importing colors using ES module syntax
import morgan from 'morgan';  // Importing morgan using ES module syntax
const app = express();

app.use(morgan('dev'));  // Correct usage of 'morgan'

dotenv.config();
app.use(cors());
//

// dotenv.config();

// const app = express();
// app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

//



// app.use(express.json());
// app.use(UserRoutes)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // for form data


//routes

// Register routes
app.use("/api/v1/user", userRoutes);  // User routes
app.use("/api/v1/admin", adminRoutes);  // Admin routes
app.use("/api/v1/doctor", trainerRoutes);  // Trainer (Doctor) routes

// 

app.use("/api/user/", UserRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});



app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello World from Rizwan....",
  });
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect('mongodb://localhost:27017/dbms')
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
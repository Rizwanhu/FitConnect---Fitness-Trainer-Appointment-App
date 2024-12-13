import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,

  authController,
  applytrainerController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAlltrainersController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
  
} from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";
import authMiddleware from "../middleware/authMiddleware.js";  // Import using ES module syntax

const router = express.Router();
const app = express();

// Apply JSON parsing middleware to this router
// router.use(express.json());
// app.use(express.json());

// // Middleware to parse JSON and form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// Apply middleware to parse JSON and URL-encoded form data for this router only
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

router.post("/test", (req, res) => {
  console.log('Test Route Body:', req.body);
  res.send(req.body);
});


// 


//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applytrainerController);

//Notifiaction  Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAlltrainersController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);





export default router;

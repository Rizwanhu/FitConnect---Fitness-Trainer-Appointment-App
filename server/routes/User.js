import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

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

export default router;

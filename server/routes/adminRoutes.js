import express from "express"; 
import {
  getAllUsersController,
  getAlltrainersController,
  changeAccountStatusController
} from "../controllers/adminCtrl.js";  // Use ES module import
import authMiddleware from "../middleware/authMiddleware.js";  // Import the middleware


const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAlltrainersController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

// module.exports = router;
export default router;

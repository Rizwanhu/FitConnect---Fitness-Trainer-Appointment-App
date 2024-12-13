import express from 'express'; // Using ES module import
import { 
  gettrainerInfoController, 
  updateProfileController, 
  gettrainerByIdController, 
  trainerAppointmentsController, 
  updateStatusController 
} from '../controllers/trainerCtrl.js'; // ES module imports for controllers
import authMiddleware from '../middleware/authMiddleware.js'; // ES module import for authMiddleware

const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, gettrainerInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, gettrainerByIdController);

//GET Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  trainerAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

// module.exports = router;
export default router; // ES module export


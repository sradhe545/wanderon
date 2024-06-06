import express from 'express';
import { userSignupController } from '../controllers/userSignupController.js';
import { userLoginController } from '../controllers/userLoginController.js';
const router = express.Router();
router.post('/signup', userSignupController);
router.post('/login', userLoginController);
export default router;

import express from 'express';
import { getUserDetailsController ,updateUserDetailsController } from '../controllers/UserDetailsController.js';
import {authenticate} from '../middleware/middleware.js';

const router = express.Router();

router.get('/',authenticate,getUserDetailsController);
router.put('/', updateUserDetailsController);

export default router;
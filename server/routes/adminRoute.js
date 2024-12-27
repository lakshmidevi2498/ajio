import express from 'express';
import { getAdminController } from '../controllers/adminController.js';

const router = express.Router();


router.post('/', getAdminController);

export default router;

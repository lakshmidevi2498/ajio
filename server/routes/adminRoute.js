import express from 'express';
import { createAdminController, getAdminController } from '../controllers/adminController.js';

const router = express.Router();


router.post('/', getAdminController);
router.post('/add',createAdminController)

export default router;

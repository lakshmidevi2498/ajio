import express from 'express';
import { addProductController, getProductController } from '../controllers/productsController.js';

const router = express.Router();

router.post('/', addProductController);
router.get('/', getProductController);

export default router;

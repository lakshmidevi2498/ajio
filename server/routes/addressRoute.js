import express from 'express';
import { postAddressController, getAddressController ,updateAddressController} from '../controllers/addressController.js';
import { authenticate } from '../middleware/middleware.js';

const router = express.Router();

router.post('/:userId', postAddressController);
router.get('/:userId', getAddressController);
router.put('/:editAddress', updateAddressController);

export default router;

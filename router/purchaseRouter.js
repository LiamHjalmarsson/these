import { Router } from 'express';
const router = Router();

import {
    createPurchase,
} from '../controllers/purchaseController.js';

router.post('/', createPurchase);
export default router;
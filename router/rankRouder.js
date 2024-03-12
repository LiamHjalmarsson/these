import { Router } from 'express';
const router = Router();

import {
    createRank,
    getRanks
} from '../controllers/rankController.js';

router.post('/', createRank);
router.get('/', getRanks);

export default router;
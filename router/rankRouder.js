import { Router } from 'express';
const router = Router();

import {
    createRank,
    getRanks,
    getRank
} from '../controllers/rankController.js';

router.post('/', createRank);
router.get('/', getRanks);
router.get('/:id', getRank);

export default router;
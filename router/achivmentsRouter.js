import { Router } from 'express';
import { getAllAchivments, createAchivments, getAchivment } from '../controllers/achivmentsController.js';

const router = Router();

router.get('/', getAllAchivments);
router.post('/', createAchivments);
router.get('/:id', getAchivment);

export default router;
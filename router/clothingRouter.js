import { Router } from 'express';
const router = Router();

import {
    getAllClothings,
    getClothing,
    createClothing,
    updateClothing,
    deleteClothing
} from "../controllers/clothings.js";

router.get('/', getAllClothings);
router.post('/', createClothing);
router.get('/:id', getClothing);
router.patch('/:id', updateClothing);
router.delete('/:id', deleteClothing);

export default router;
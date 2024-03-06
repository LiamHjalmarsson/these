import { Router } from 'express';
const router = Router();

import {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categories.js";
import { validateInput } from '../middleware/validationMiddleware.js';

router.get('/', getAllCategories);
router.post('/', validateInput, createCategory);
router.get('/:id', getCategory);
router.patch('/:id', validateInput, updateCategory);
router.delete('/:id', deleteCategory);

export default router;
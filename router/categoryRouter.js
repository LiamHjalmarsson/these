import { Router } from 'express';
const router = Router();

import {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categories.js";

router.get('/', getAllCategories);
router.post('/', createCategory);
router.get('/:id', getCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;
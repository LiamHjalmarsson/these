import { Router } from 'express';
const router = Router();

import {
    getCurrentUser,
    updateUser,
    addComment
} from '../controllers/userController.js';

router.get('/:id', getCurrentUser);
router.patch('/:id', updateUser);
router.patch('/:id/comments', addComment);
export default router;
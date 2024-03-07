import { Router } from 'express';
const router = Router();

import {
    getCurrentUser,
    updateUser,
} from '../controllers/userController.js';

router.get('/:id', getCurrentUser);
router.patch('/update-user', updateUser);
export default router;
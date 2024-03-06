import { Router } from 'express';
const router = Router();

import {
    getCurrentUser,
    updateUser,
} from '../controllers/userController.js';

router.get('/current-user', getCurrentUser);
router.patch('/update-user', updateUser);
export default router;
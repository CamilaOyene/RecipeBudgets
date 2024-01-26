import Router from 'express';
import authRouter from './authRoutes.js';
import recipesRouter from './recipesRoutes.js';

const router = Router();

router.use('/auth',authRouter);
router.use('/recipes', recipesRouter);

export default router;
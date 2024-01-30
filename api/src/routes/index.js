import Router from 'express';
import authRouter from './authRoutes.js';
import recipeRouter from './recipesRoutes.js';
import ingredientRouter from './ingredientsRoutes.js';

const router = Router();

router.use('/auth',authRouter);
router.use('/recipes', recipeRouter);
router.use('ingredient', ingredientRouter);

export default router;
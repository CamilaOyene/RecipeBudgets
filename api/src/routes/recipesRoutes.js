// routes/recipes/recipeRoutes.js
import Router from 'express';
import createRecipeController from '../controllers/recipes/POST/createRecipeController.js';
import getAllRecipesController from '../controllers/recipes/GET/getAllRecipesController.js';
import getRecipeByIdController from '../controllers/recipes/GET/getRecipeByIdController.js';
import updateRecipeByIdController from '../controllers/recipes/UPDATE/updateRecipeByIdController.js';
import deleteRecipeByIdController from '../controllers/recipes/DELETE/deleteRecipeByIdController.js';
import { createRecipeValidation, updateRecipeValidation } from '../middlewares/validationMiddleware.js';

const recipeRouter = Router();

// Ruta para crear una nueva receta
recipeRouter.post('/create', createRecipeValidation, createRecipeController);

// Ruta para obtener todas las recetas
recipeRouter.get('/all', getAllRecipesController);

// Ruta para obtener una receta por su ID
recipeRouter.get('/:recipeId', getRecipeByIdController);

// Ruta para actualizar una receta por su ID
recipeRouter.put('/:recipeId', updateRecipeValidation, updateRecipeByIdController);

// Ruta para eliminar una receta por su ID
recipeRouter.delete('/:recipeId', deleteRecipeByIdController);

export default recipeRouter;

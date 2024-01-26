import Router from 'express';
import { createRecipeController } from '../controllers/recipes/POST/createRecipeController.js';


const recipesRouter = Router()

//Ruta POST para crear receta
recipesRouter.post('/create-recipe', createRecipeController);

export default recipesRouter;
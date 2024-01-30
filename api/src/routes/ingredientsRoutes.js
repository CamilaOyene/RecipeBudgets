import Router from 'express';
import createIngredientController from '../controllers/ingredients/POST/createIngredientController.js';
import getAllIngredientsController from '../controllers/ingredients/GET/getAllIngredientsController.js';
import getIngredientByIdController from '../controllers/ingredients/GET/getIngredientByIdController.js';
import updateIngredientByIdController from '../controllers/ingredients/UPDATE/udpateIngredientController.js';
import deleteIngredientByIdController from '../controllers/ingredients/DELETE/deleteIngredientById.js';
import { createIngredientValidation } from '../middlewares/validationMiddleware.js';

const ingredientRouter = Router();

//Ruta para crar un nuevo ingrediente
ingredientRouter.post('create', createIngredientValidation, createIngredientController);
// Ruta para obtener todos los ingredientes
ingredientRouter.get('/all', getAllIngredientsController);

// Ruta para obtener un ingrediente por su ID
ingredientRouter.get('/:ingredientId', getIngredientByIdController);

// Ruta para actualizar un ingrediente por su ID
ingredientRouter.put('/:ingredientId', createIngredientValidation, updateIngredientByIdController);

// Ruta para eliminar un ingrediente por su ID
ingredientRouter.delete('/:ingredientId', deleteIngredientByIdController);


export default ingredientRouter;
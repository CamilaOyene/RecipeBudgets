import { Router } from "express";
//user
import getUserDetailsByIdController from "../controllers/user/GET/getUserDetailsByIdController.js";
//ingredients
import createIngredientController from '../controllers/ingredients/POST/createIngredientController.js';
import getAllIngredientsController from '../controllers/ingredients/GET/getAllIngredientsController.js';
import getIngredientByIdController from '../controllers/ingredients/GET/getIngredientByIdController.js';
import updateIngredientByIdController from '../controllers/ingredients/UPDATE/udpateIngredientController.js';
import deleteIngredientByIdController from '../controllers/ingredients/DELETE/deleteIngredientById.js';
//recetas
import createRecipeController from '../controllers/recipes/POST/createRecipeController.js';
import getAllRecipesController from '../controllers/recipes/GET/getAllRecipesController.js';
import getRecipeByIdController from '../controllers/recipes/GET/getRecipeByIdController.js';
import updateRecipeByIdController from '../controllers/recipes/UPDATE/updateRecipeByIdController.js';
import deleteRecipeByIdController from '../controllers/recipes/DELETE/deleteRecipeByIdController.js';

const userRouter = Router();

//Ruta usuario por id 
userRouter.get("/:userId", getUserDetailsByIdController);






//Rutas para ingredientes de un usuario en particular
//Ruta para crar un nuevo ingrediente
userRouter.post('/:userId/igredients/create', createIngredientController);
// Ruta para obtener todos los ingredientes
userRouter.get('/:userId/igredients/all', getAllIngredientsController);

// Ruta para obtener un ingrediente por su ID
userRouter.get('/:userId/igredients/:ingredientId', getIngredientByIdController);

// Ruta para actualizar un ingrediente por su ID
userRouter.put('/:userId/igredients/:ingredientId', updateIngredientByIdController);

// Ruta para eliminar un ingrediente por su ID
userRouter.delete('/:userId/igredients/:ingredientId', deleteIngredientByIdController);





//Rutas para recetas de usuario en particular
// Ruta para crear una nueva receta
userRouter.post('/:userId/recipes/create', createRecipeController);
// console.log('reciperouter', createRecipeController())
// Ruta para obtener todas las recetas
userRouter.get('/:userId/recipes/all', getAllRecipesController);

// Ruta para obtener una receta por su ID
userRouter.get('/:userId/recipes/:recipeId', getRecipeByIdController);

// Ruta para actualizar una receta por su ID
userRouter.put('/:userId/recipes/:recipeId', updateRecipeByIdController);

// Ruta para eliminar una receta por su ID
userRouter.delete('/:userId/recipes/:recipeId', deleteRecipeByIdController);



export default userRouter;
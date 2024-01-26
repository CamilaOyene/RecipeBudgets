import { handleCreateRecipe } from "../../../handlers/recipes/recipesHandlers.js";

/**
 * Controlador para manejar la solicitud de creación de una nueva receta.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const createRecipeController = async(req,res,next) => {
    try {
        const recipeData = req.body;
        const result = await handleCreateRecipe(recipeData);
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en createRecipeController', error);
        next(error);
    }
}

export default createRecipeController;
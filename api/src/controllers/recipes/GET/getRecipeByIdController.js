import { handleGetRecipeById } from "../../../handlers/recipes/recipesHandlers.js";

/**
 * Controlador para manejar la solicitud de obtener una receta por su ID.
 * @param {Object} req - Objeto de la solicitud de Express.
 * @param {Object} res - Objeto de la respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const getRecipeByIdController = async (req,res,next) => {
    try {
        const recipeId = req.params.recipeId;
        const result = await handleGetRecipeById(recipeId);
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en getRecipeByIdController, ', error)
        next(error)
    }
}

export default getRecipeByIdController;
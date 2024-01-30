import { handleDeleteRecipeById } from "../../../handlers/recipes/recipesHandlers.js";

/**
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de de respuesta Express.
 * @param {Function} next - Función para pasar el siguiente middleware.
 */

const deleteRecipeByIdController = async (req, res, next) => {
    try {
        const recipeId = req.params.recipeId;
        const result = await handleDeleteRecipeById(recipeId);
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en deleteRecipeByIdController , ', error)
        next(error)
    }
}

export default deleteRecipeByIdController;
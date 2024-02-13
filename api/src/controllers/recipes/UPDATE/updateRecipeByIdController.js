import { handleUpdateRecipeById } from "../../../handlers/recipes/recipesHandlers.js";

/**
 * Controlador para manejar la solicitud de actualizar una receta por su ID.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const updateRecipeByIdController = async (req, res, next) => {
    try {
        const updatedData = req.body;
        const { recipeId } = req.params;
        
        const result = await handleUpdateRecipeById(recipeId, updatedData);
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en updateRecipeByIdController', error);
        next(error);
    }
}

export default updateRecipeByIdController;
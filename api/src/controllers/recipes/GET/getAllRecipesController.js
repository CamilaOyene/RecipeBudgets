import {
    handleGetAllRecipes
} from '../../../handlers/recipes/recipesHandlers.js';

/**
 * Controlador para manejar la solicitud de obtener todas las recetas.
 * @param {Object} req - Objeto de solicitud de Express. 
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const getAllRecipesController = async (req, res, next) => {
    try {
        const result = await handleGetAllRecipes();
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en getAllRecipesController GET', error);
        next(error);
    }
}

export default getAllRecipesController;
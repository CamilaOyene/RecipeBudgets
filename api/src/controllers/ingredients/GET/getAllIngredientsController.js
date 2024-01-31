import { handleGetAllIngredients } from '../../../handlers/ingredients/ingredientsHandlers.js';
/**
 * Controlador para la creación de un nuevo ingrediente.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const getAllIngredientsController = async (req, res, next) => {
    try {
        const result = await handleGetAllIngredients();
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en getAllIngredientsController', error)
        next(error);
    }
};

export default getAllIngredientsController;
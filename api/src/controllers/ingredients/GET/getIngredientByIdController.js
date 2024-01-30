import { handleGetIngredientById } from "../../../handlers/ingredients/ingredientsHandlers.js";

/**
 * Controlador para la creación de un nuevo ingrediente.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const getIngredientByIdController = async ( req, res, next) => {
    try {
        const ingredientId = req.params;
        const result = await handleGetIngredientById(ingredientId);
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en getIngredientByIdController', error);
        next(error);
    }
};

export default getIngredientByIdController;
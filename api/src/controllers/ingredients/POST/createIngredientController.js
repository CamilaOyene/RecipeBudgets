import { handleCreateIngredient } from '../../../handlers/ingredients/ingredientsHandlers.js';

/**
 * Controlador para la creación de un nuevo ingrediente.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const createIngredientController = async (req, res, next) => {
    try {
        const ingredientData = req.body;
        const { userId } = req.params;
        ingredientData.userId = userId;

        console.log('ingredientData controller', ingredientData);
        const result = await handleCreateIngredient(ingredientData);
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en createIngredientController ,', error)
        next(error)
    }
};

export default createIngredientController;
import { handleUpdateIngredientById } from '../../../handlers/ingredients/ingredientsHandlers.js';

/**
 * Controlador para la creación de un nuevo ingrediente.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const updateIngredientByIdController = async (req, res, next) => {
    try {
        const updateData = req.body;
        const { ingredientId } = req.params;
        const { userId } = req.params;
        updateData.userId = userId;
        
        const result = await handleUpdateIngredientById(ingredientId, updateData);
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en updateIngredientByIdController , ', error)
        next(error)
    }
};

export default updateIngredientByIdController;
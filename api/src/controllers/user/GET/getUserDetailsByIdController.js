import { handlerGetUserDetailsById } from "../../../handlers/user/usersHandlers.js";

/**
 * Controlador para obtener los detalles de un usuario por su ID.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const getUserDetailsByIdController = async (req, res, next) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            res.status(400).json({ message: 'proporcionar ID' })
        }

        const result = await handlerGetUserDetailsById(userId);

        res.status(result.status).json(result.data)
    } catch (error) {
        console.log('error en getUserDetailsByIdController, ', error)
        next(error)
    }
};

export default getUserDetailsByIdController;
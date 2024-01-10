import { handleRegistration } from '../../../handlers/auth/registerHandler.js';

/**
 * Controlador para manejar la solicitud de registro de un nuevo usuario.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const registerController = async (req, res, next) => {
    try {
        //Llamar al handler para manejar la solicitud de registro
        const result = await handleRegistration(req.body);

        // Enviar la respuesta al cliente con el estado y datos del usuario
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en registerController', error)
        //Propagar el error al middleware de manejo de errores si ocurre algún problema
        throw error;
    }
}

export default registerController;
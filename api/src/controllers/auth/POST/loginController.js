import Router from 'express';
import { handleLogin } from '../../../handlers/auth/loginHandler.js';

/**
 * Controlador para manejar la solicitud de inicio de sesión de un usuario.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */

const loginController = Router()

loginController.post('/', async(req, res, next) => {
    try {
        const { email, password} = req.body;
        //Llamar al handler para manejar la solicitud de inicio de sesión
        const result = await handleLogin(email, password);

        //Enviar la respuesta al cliente con el estado, token y
        res.status(result.status).json(result.data);
    } catch (error) {
        console.log('error en logincontroller', error)
        //Propagar el error al middleware de manejo de errores si ocurre algún problema
        next(error);
    }
});

export default loginController;
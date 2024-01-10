import { registerUser } from '../../services/auth/registerService.js';

/**
 * Maneja la solicitud de registro de un nuevo usuario.
 * @param {Object} userData - Datos del usuario a registrar.
 * @returns {Promise<Object>} - Objeto de respuesta con el estado y los datos del usuario registrado.
 * @throws {Error} - Error en caso de fallo durante el registro.
 */

export const handleRegistration = async(userData) => {
    try {
        //Llamar al servicio para registrar al usuario
        const newUser = await registerUser(userData);

        //Retornar el resultado exitoso con el nuevo usuario
        return {status: 201, data: newUser};
    } catch (error) {
        console.log('Error en registerHandle', error);
        //propagar el error si ocurre algún problema durante el registro
        throw error
    }
}
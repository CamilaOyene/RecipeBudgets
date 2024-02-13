import { getUserDetailsById } from '../../services/user/userServices.js';
import mongoose from 'mongoose';




/**
 * Maneja la obtención de un usuario.
 * @param {string} userId - ID del usuario.
 * @returns {Promise<Object>} - Detalles del usuario.
 * @throws {Error} - Error en caso de fallo.
*/

export const handlerGetUserDetailsById = async (userId) => {
    try {
        //Validar que el ID sea un ObjectId válido
        if (!mongoose.isValidObjectId(userId)) {
            throw new Error('ID de usuario no válido.')
        }
        const user = await getUserDetailsById(userId);

        //Validar que el ID sea encontrado.
        if (!user) {
            throw new Error('No se ha encontrado usuario')
        }
        return { status: 200, data: user };
    } catch (error) {
        console.log('error en getUserDetailsById, ', error)
        throw new Error(error);
    }
};
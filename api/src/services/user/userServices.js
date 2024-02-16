import { UserModel } from '../../db/models/userSchema.js';

/**
 * Función para devolver los detalles del usuario.
 * @param {string} userId - ID del usuario.
 * @returns {Promise<Object>} - Detalles del usuario.
 * @throws {Error} - Error en caso de fallo.
 */

export const getUserDetailsById = async (userId) => {
    try {
        const existUser = await UserModel
            .findById(userId)
            .populate('recipes')
            .populate('ingredients');
        if (!existUser) {
            throw new Error('No se encuentra el usuario')
        }
        return existUser;
    } catch (error) {
        console.log('error en userDetailsById => ,', error)
        throw error;
    }
};
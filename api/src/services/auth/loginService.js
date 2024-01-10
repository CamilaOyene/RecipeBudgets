import { UserModel } from '../../db/models/userSchema.js';
import { comparePassword } from '../../helpers/bcryptHelper.js';
import { generateToken } from '../../helpers/jwtHelper.js';

/**
 * Autentica a un usuario y genera un token JWT.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Promise<Object>} - Objeto con el token y datos del usuario autenticado.
 * @throws {Error} - Error en caso de autenticación fallida.
 */

export const loginUser = async (email, password) => {
    try {

        //Buscar al usuario por su email
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        //Comparar la contraseña proporcionada con la contraseña almacenada.
        const isPasswordValid = await comparePassword()

        //Verificar la validez de la contraseña
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        //Generar token JWT para el usuario autenticado
        const token = generateToken({ userId: user._id, email: user.email });

        return { token, user };

    } catch (error) {
        console.log('error en loginService ', error)
        throw error;
    }

}

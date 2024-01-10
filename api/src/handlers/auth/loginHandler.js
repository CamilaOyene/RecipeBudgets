import { loginUser } from '../../services/auth/loginService.js';

/**
 * Maneja la solicitud de inicio de sesión de un usuario.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Promise<Object>} - Objeto de respuesta con el estado, token y datos del usuario autenticado.
 * @throws {Error} - Error en caso de autenticación fallida.
 */

export const handleLogin = async (email, password) => {
    try {
        //Validar que se proporcionen email y password.
        if(!email || !password){
            throw new Error('Correo electrónico y contraseña son obligatorios');
        }

        //Llamar al servicio para autenticar al usuario y generar un token
        const { token, user } = await loginUser(email, password);
        
        //Retornar el resultado exitoso con el token y datos del usuario autenticado
        return { status: 201, data: { token, user } };

    } catch (error) {
        console.log('error en loginHandler', error);
        //Manejar errores específicos.
        if(error.message === 'Invalid email or password'){
            return {status:401, error: 'Correo electrónico o contraseña inválidos.'};
        }else if(error.message === 'Correo electrónico y contraseña son obligatorios'){
            return { status:400, error: 'Correo electrónico y contraseña son obligatorios'};
        } else {
            // Propagar otros errores inesperados
            throw error;
        }
        
    }
};
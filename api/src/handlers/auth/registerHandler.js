import { registerUser } from '../../services/auth/registerService.js';

/**
 * Maneja la solicitud de registro de un nuevo usuario.
 * @param {Object} userData - Datos del usuario a registrar.
 * @returns {Promise<Object>} - Objeto de respuesta con el estado y los datos del usuario registrado.
 * @throws {Error} - Error en caso de fallo durante el registro.
 */

export const handleRegistration = async(userData) => {
    try {
        //Validar que se proporcionen datos de usuario
        if(!userData || Object.keys(userData).length === 0){
            throw new Error('Datos de usuario no proporcionados');
        }

        //Validar que se proporcionen email y password
        if(!userData.email || !userData.password){
            throw new Error('Correo electrónico y contraseña son obligatorios');
        }

        //Llamar al servicio para registrar al usuario
        const newUser = await registerUser(userData);

        //Retornar el resultado exitoso con el nuevo usuario
        return {status: 201, data: newUser};
    } catch (error) {
        console.log('Error en registerHandle', error);
        //Manejar errores específicos 
        if(error.message === 'Usuario ya registrado'){
            return {status:400, message: 'El usuario ya está registrado'};
        }else if(error.message === 'Datos de usuario no proporcionados'){
            return {status:400, error: 'Se requieren datos de usuario para el registro'};            
        }else if(error.message === 'Correo electrónico y contraseña son obligatorios'){
            return {status:400, error: 'Correo electrónico y contraseña son obligatorios'};
        }else{
            //propagar otros errores inesperados
            throw error
        }
    }
}
import { UserModel } from '../../db/models/userSchema.js';
import { hashPassword } from '../../helpers/bcryptHelper.js';

export const registerUser = async (userData) => {
    try {
        //Verificar si ya existe un usuario con el mismo email.
        const existingUser = await UserModel.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('Usuario ya registrado');
        }
        //Hash de la contraseña antes de guardar en la base de datos.
        const hashedPassword = await hashPassword(userData.password);
        userData.password = hashedPassword;

        //Crear un nuevo usuario
        const newUser = await UserModel.create(userData);
        return newUser;
    } catch (error) {
        console.log('error en registerservice', error);
        throw new Error(error);
    }
}
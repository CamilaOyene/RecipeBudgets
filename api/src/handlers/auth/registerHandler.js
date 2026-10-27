import { registerUser } from '../../services/auth/registerService.js';

export const handleRegistration = async (userData) => {
    if (!userData || Object.keys(userData).length === 0) {
        return { status: 400, data: { error: 'Se requieren datos de usuario para el registro' } };
    }
    if (!userData.email || !userData.password) {
        return { status: 400, data: { error: 'Correo electrónico y contraseña son obligatorios' } };
    }

    try {
        const newUser = await registerUser(userData);
        const { password, ...safeUser } = newUser.toObject();
        return { status: 201, data: safeUser };
    } catch (error) {
        if (error.message === 'Usuario ya registrado') {
            return { status: 409, data: { error: 'El usuario ya está registrado' } };
        }
        throw error;
    }
};

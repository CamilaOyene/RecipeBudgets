import { loginUser } from '../../services/auth/loginService.js';

export const handleLogin = async (email, password) => {
    if (!email || !password) {
        return { status: 400, data: { error: 'Correo electrónico y contraseña son obligatorios' } };
    }

    try {
        const { token, userWithoutSensitiveInfo } = await loginUser(email, password);
        return { status: 200, data: { token, userWithoutSensitiveInfo } };
    } catch (error) {
        if (error.message === 'Invalid email or password') {
            return { status: 401, data: { error: 'Correo electrónico o contraseña inválidos' } };
        }
        throw error;
    }
};

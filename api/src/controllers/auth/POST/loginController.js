import { handleLogin } from '../../../handlers/auth/loginHandler.js';

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await handleLogin(email, password);

        if (result.status === 200) {
            req.session.user = result.data.userWithoutSensitiveInfo;
        }

        return res.status(result.status).json(result.data);
    } catch (error) {
        next(error);
    }
};

export default loginController;

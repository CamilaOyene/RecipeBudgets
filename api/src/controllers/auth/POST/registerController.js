import { handleRegistration } from '../../../handlers/auth/registerHandler.js';

const registerController = async (req, res, next) => {
    try {
        const result = await handleRegistration(req.body);
        return res.status(result.status).json(result.data);
    } catch (error) {
        next(error);
    }
};

export default registerController;

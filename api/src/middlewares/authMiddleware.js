import { verifyToken } from '../helpers/jwtHelper.js';

/**
 * Middleware de autenticación que verifica y decodifica un token JWT.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} req - Objeto de solicitud.
*/

export const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token not provieded' });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Unauthorized - Invalid token' });
    }
};
import { verifyToken } from '../helpers/jwtHelper.js';

/**
 * Middleware de autenticación que verifica y decodifica un token JWT.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} req - Objeto de solicitud.
*/

export const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
    try {

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - Token not provieded' });
        }

        //Verificar la existencia de una sesión activa 
        if (!req.session || !req.session.user) {
            return res.status(401).json({ error: 'Unauthorized - Session  not active' });
        }
        //Almacenar la información decodificada en req.user para su uso posterior 
        const decoded = verifyToken(token);
        req.user = decoded;

        //Pasar al siguiente middleware si la autenticación es exitosa 
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Unauthorized - Invalid token' });
    }
};
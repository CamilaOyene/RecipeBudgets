import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY

/**
 * Generar un nuevo token JWT con la carga útil proporcionada.
 * @param {Object} payload - Carga útil del token.
 * @returns {string} - Token JWT generado.
 */

export const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '2h' });
};

/**
 * Verifica y decodifica un token JWT.
 * @param {string} token - Token JWT a verificar y decodificar.
 * @returns {Object} - Objeto que representa la carga útil del token decodificado.
 */

export const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};



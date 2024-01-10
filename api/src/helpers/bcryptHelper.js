import bcrypt from 'bcrypt';

//Número de rondas de sal para el hash
const saltRounds = 10;

/**
 * Genera un hash de contraseña utilizando bcrypt.
 * @param {string} password - Contraseña a hashear.
 * @returns {Promise<string>} - Hash de contraseña resultante.
 */

export const hashPassword = async(password) => {
    return bcrypt.hash(password, saltRounds);
};


/**
 * Compara una contraseña con su hash utilizando bcrypt.
 * @param {string} password - Contraseña a comparar.
 * @param {string} hashedPassword - Hash de contraseña almacenada.
 * @returns {Promise<boolean>} - `true` si la contraseña es válida, `false` en caso contrario.
 */

export const comparePassword = async(password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
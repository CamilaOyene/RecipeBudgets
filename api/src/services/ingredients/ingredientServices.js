import { IngredientModel } from '../../db/models/ingredientSchema';

/**
 * Servicio para crear un nuevo ingrediente.
 * @param {Object} ingredientData - Datos del ingrediente a crear.
 * @returns {Promise<Object>} - Nuevo ingrediente creado.
 * @throws - Error en caso de fallo.
 */

export const createIngredient = async (ingredientData) => {
    try {
        const newIngredient = await IngredientModel.create(ingredientData);
        return newIngredient;
    } catch (error) {
        console.log('error en createIngredient, services => ', error)
        throw error;
    }
};


/**
 * Servicio para obtener todos los igredientes.
 * @returns {Promise<Object>} - Lista de todos los ingredientes.
 * @throws {Error} - Error en caso de fallo.
 */

export const getAllIngredients = async () => {
    try {
        const ingredients = await IngredientModel.find();
        return ingredients;
    } catch (error) {
        console.log('error en getAllIngredients, services => ', error)
        throw error;
    }
};

/**
 * Servicio para obtener un ingrediente por su ID.
 * @param {string} ingredientId - ID del ingrediente a obtener.
 * @returns {Promise<Object>} - Detalles del ingrediente.
 * @throws {Error} - Error en caso de fallo.
 */

export const getIngredientById = async (ingredientId) => {
    try {
        const ingredient = await IngredientModel.findById(ingredientId);
        if (!ingredient) {
            throw new Error('Ingredient not found');
        }
        return ingredient;
    } catch (error) {
        console.log('error en getIngredientById. services ', error)
        throw error;
    }
};


/**
 * Servicio para actualizar un ingrediente por su ID.
 * @param {string} ingredientId - ID del ingrediente a actualizar.
 * @param {Object} updateData - Datos actualizados del ingrediente.
 * @returns {Promise<Object>} - Ingrediente actualizado.
 * @throws {Error} - Error en caso de fallo.
 */

export const updateIngredientById = async (ingredientId, updateData) => {
    try {
        const updatedIngredient = await IngredientModel.findByIdAndUpdate(ingredientId, updateData, { new: true });
        if (!updatedIngredient) {
            throw new Error('Ingredient not found');
        }
        return updatedIngredient;
    } catch (error) {
        console.log('error en updateIngredientById. services ', error)
        throw error;
    }
};

/**
 * Servicio para eliminar un ingrediente por su ID.
 * @param {string} ingredientId - ID del ingrediente a eliminar.
 * @returns {Promise<Object>} - Resultado de la operación de eliminación.
 * @throws {Error} - Error en caso de fallo.
 */

export const deleteIngredientById = async (ingredientId) => {
    try {
        const deletedIngredient = await IngredientModel.findByIdAndDelete(ingredientId)
        if (!deletedIngredient) {
            throw new Error('Ingredient not found');
        }
        return { message: 'Ingredient deleted successfully' };
    } catch (error) {
        console.log('error en deleteIngredientById, services ', error)
        throw error;
    }
};
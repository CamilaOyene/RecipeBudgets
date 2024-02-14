import { IngredientModel } from '../../db/models/ingredientSchema.js';
import {
    createOrGetIngredient,
    getAllIngredients,
    getIngredientById,
    updateIngredientById,
    deleteIngredientById,
} from '../../services/ingredients/ingredientServices.js';
import mongoose from 'mongoose';


/**
 * Maneja la creación de un nuevo ingrediente.
 * @param {Object} ingredientData - Datos del nuevo ingrediente.
 * @returns {Promise<Object>} - Nuevo ingrediente creado.
 * @throws {Error} - Error en caso de fallo o validación.
 */

export const handleCreateIngredient = async (ingredientData) => {
    try {
        // Validar datos requeridos
        if (!ingredientData.name || !ingredientData.unit || !ingredientData.cost_per_unit) {
            throw new Error('Nombre, unidad y costo por unidad son campos obligatorios.');
        }

       // Crear o obtener el ingrediente
       const newIngredient = await createOrGetIngredient(ingredientData);
       if (newIngredient) {
           return { status: 201, data: newIngredient };
       } else {
           throw new Error('No se pudo crear el ingrediente.');
       }
    } catch (error) {
        console.log('error en handleCreateIngredient:', error);
        throw error;
    }
};

/**
 * Maneja la obtención de todos los ingredientes.
 * @returns {Promise<Object>} - Lista de todos los ingredientes.
 * @throws {Error} - Error en caso de fallo.
 */

export const handleGetAllIngredients = async () => {
    try {
        const ingredients = await getAllIngredients();

        if(!ingredients){
            throw new Error('No se encuentran ingredientes');
        }

        
        return { status: 200, data: ingredients };
    } catch (error) {
        console.log('error en hadleGetAllIngredients ,', error)
        throw error;
    }
};

/**
 * Maneja la obtención de un ingrediente por su ID.
 * @param {string} ingredientId - ID del ingrediente a obtener.
 * @returns {Promise<Object>} - Detalles del ingrediente.
 * @throws {Error} - Error en caso de fallo.
 */
export const handleGetIngredientById = async (ingredientId) => {
    try {
        //Validar que el ID sea un ObjectId válido
        if (!mongoose.isValidObjectId(ingredientId)) {
            throw new Error('ID de ingrediente no válido.')
        }

        const ingredient = await getIngredientById(ingredientId);

        //Valida que encuentre el ingrediente.
        if (!ingredient) {
            throw new Error('Ingrediente no encontrado.');
        }

        return { status: 200, data: ingredient };
    } catch (error) {
        console.log('error en handleGetIngredientById ,', error)
        throw error;
    }
};

/**
 * Maneja la actualización de un ingrediente por su ID.
 * @param {string} ingredientId - ID del ingrediente a actualizar.
 * @param {Object} updateData - Datos actualizados del ingrediente.
 * @returns {Promise<Object>} - Ingrediente actualizado.
 * @throws {Error} - Error en caso de fallo o validación.
 */

export const handleUpdateIngredientById = async (ingredientId, updateData) => {
    try {
        //Validar que el ingrediente exista
        const existingIngredient = await IngredientModel.findById(ingredientId);
        if (!existingIngredient) {
            throw new Error('Ingrediente no encontrado.');
        }

        //Validar datos actualizados
        if (updateData.name && updateData.name !== existingIngredient.name) {
            //Si se está actualizando el nombre, verificar duplicados
            const duplicateIngredient = await IngredientModel.findOne({ name: updateData.name });
            if (duplicateIngredient) {
                throw new Error('Ua existe un ingrediente con este nombre.');
            }
        }
        const updatedIngredient = await updateIngredientById(ingredientId, updateData);
        return { status: 200, data: updatedIngredient };
    } catch (error) {
        console.log('error en handleUpdaateIngredientById ,', error)
        throw error
    }
};

/**
 * Maneja la eliminación de un ingrediente por su ID.
 * @param {string} ingredientId - ID del ingrediente a eliminar.
 * @returns {Promise<Object>} - Resultado de la operación de eliminación.
 * @throws {Error} - Error en caso de fallo o validación.
 */

export const handleDeleteIngredientById = async (ingredientId) => {
    try {
        //Validar que el ingrediente exista
        const existingIngredient = await IngredientModel.findById(ingredientId);
        if (!existingIngredient) {
            throw new Error('Ingrediente no encontrado.');
        }
        const result = await deleteIngredientById(ingredientId);
        return { status: 200, data: result }
    } catch (error) {
        console.log('error en handleDEleteIngredientById ,', error)
        throw error;
    }
}
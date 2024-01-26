import { RecipeModel } from "../../db/models/recipeSchema.js";

/**
 * Servicio para crear una nueva receta.
 * @param {Object} recipeData - Datos de la receta a crear.
 * @returns {Promise<Object>} - Nueva receta creada.
 * @throws {Error} - Error en caso de fallo.
 */

export const createRecipe = async (recipeData) => {
    try {
        const newRecipe = await RecipeModel.create(recipeData);
        return newRecipe;
    } catch (error) {
        console.log('error en recipeService creaeteRecipe', error)
        throw error;
    }
}

export const getAllRecipes = async () => {
    /**
 * Servicio para obtener todas las recetas.
 * @returns {Promise<Array>} - Lista de todas las recetas.
 * @throws {Error} - Error en caso de fallo.
 */
    try {
        const recipes = await RecipeModel.find().populate('ingredients.ingredient');
        return recipes;
    } catch (error) {
        console.log('error en getAllRecipes', error)
        throw error;
    };
};


/**
 * Servicio para obtener una receta por su ID.
 * @param {string} recipeId - ID de la receta a obtener.
 * @returns {Promise<Object>} - Detalles de la receta.
 * @throws {Error} - Error en caso de fallo.
 */

export const getRecipeById = async (recipeId) => {
    try {
        const recipe = await RecipeModel.findById(recipeId).populate('ingredients.ingredient');
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        return recipe;
    } catch (error) {
        console.log('error en getRecipeById , recipeService', error);
        throw error;
    }
}

/**
 * Servicio para actualizar una receta por su ID.
 * @param {string} recipeId - ID de la receta a actualizar.
 * @param {Object} updatedData - Datos actualizados de la receta.
 * @returns {Promise<Object>} - Receta actualizada.
 * @throws {Error} - Error en caso de fallo.
 */

export const updateRecipeById = async (recipeId, updateData) => {

    try {
        const updateRecipe = await RecipeModel.findByIdAndUpdate(recipeId, updateDate, { new: true });
        if (!updateRecipe) {
            throw new Error('Recipe not found');
        }
        return updateRecipe;
    } catch (error) {
        console.log('error en updateRecipe recipeService', error);
        throw error;
    }
}

/**
 * Servicio para eliminar una receta por su ID.
 * @param {string} recipeId - ID de la receta a eliminar.
 * @returns {Promise<Object>} - Mensaje de éxito.
 * @throws {Error} - Error en caso de fallo.
 */


export const deleteRecipeById = async (recipeId) => {
    try {
        const deletedRecipe = await RecipeModel.findByIdAndDelete(recipeId);
        if (!deteledRecipe) {
            throw new Error('Recipe not found');
        }
        return { message: 'Recipe deleted successfully' };
    } catch (error) {
        console.log('error en deleteRecipeById recipeService', error)
        throw error;
    }
}

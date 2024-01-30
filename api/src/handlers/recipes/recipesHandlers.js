import {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipeById,
    deletedRecipeById,
} from '../../services/recipes/recipeServices.js';

/**
 * Maneja la solicitud para crear una nueva receta.
 * @param {Object} recipeData - Datos de la receta a crear.
 * @returns {Promise<Object>} - Nueva receta creada.
 * @throws {Error} - Error en caso de fallo.
 */

export const handleCreateRecipe = async (recipeData) => {
    try {
        const newRecipe = await createRecipe(recipeData);
        return { status: 201, data: newRecipe };
    } catch (error) {
        console.log('error en handleCreateRecipe', error)
        throw error;
    }
}


/**
 * Maneja la solicitud para obtener todas las recetas.
 * @returns {Promise<Array>} - Lista de todas las recetas.
 * @throws {Error} - Error en caso de fallo.
 */

export const handleGetAllRecipes = async () => {
    try {
        const recipes = await getAllRecipes();
        return { status: 200, data: recipes }
    } catch (error) {
        console.log('error en handleGetAllRecipes', error);
        throw error;
    }
}

/**
 * Maneja la solicitud para obtener una receta por su ID.
 * @param {string} recipeId - ID de la receta a obtener.
 * @returns {Promise<Object>} - Detalles de la receta.
 * @throws {Error} - Error en caso de fallo.
 */

export const handleGetRecipeById = async (recipeId) => {
    try {
        const recipe = await getRecipeById(recipeId)
        return { status: 200, data: recipe };
    } catch (error) {
        console.log('error en handleGetRecipeById', error)
        throw error;
    }
};

/**
 * Maneja la solicitud para actualizar una receta por su ID.
 * @param {string} recipeId - ID de la receta a actualizar.
 * @param {Object} updatedData - Datos actualizados de la receta.
 * @returns {Promise<Object>} - Receta actualizada.
 * @throws {Error} - Error en caso de fallo.
 */

export const handleUpdateRecipeById = async (recipeId, updateData) => {

    try {
        const updatedRecipe = await updateRecipeById(recipeId, updateData);
        return { status: 200, data: updatedRecipe }
    } catch (error) {
        console.log('error en handleUpdateRecipeById', error);
        throw error;
    }
};

/**
 * Maneja la solicitud para eliminar una receta por su ID.
 * @param {string} recipeId - ID de la receta a eliminar.
 * @returns {Promise<Object>} - Mensaje de éxito.
 * @throws {Error} - Error en caso de fallo.
 */

export const handleDeleteRecipeById = async (recipeId) => {
    try {
        const result = await deletedRecipeById(recipeId);
        return { status: 200, data: result };
    } catch (error) {
        console.log('error en handleDeleteRecipeById', error);
        throw error;
    }
};


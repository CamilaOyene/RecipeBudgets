import { IngredientModel } from '../../db/models/ingredientSchema.js';
import { RecipeModel } from '../../db/models/recipeSchema.js';
import { createOrGetIngredient } from '../../services/ingredients/ingredientServices.js';
import {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById,
} from '../../services/recipes/recipeServices.js';

/**
 * Maneja la solicitud para crear una nueva receta.
 * @param {Object} recipeData - Datos de la receta a crear.
 * @returns {Promise<Object>} - Nueva receta creada.
 * @throws {Error} - Error en caso de fallo.
 */

export const handleCreateRecipe = async (recipeData) => {
    try {
        //Verifica que se proporcionen ingredientes y que sean válidos
        if (!recipeData.ingredients || recipeData.ingredients.length === 0) {
            throw new Error('No se proporcionaron ingredientes');
        }

        // Verifica si ya existe una receta con el mismo nombre
        const existingRecipe = await RecipeModel.findOne({ name: recipeData.name });
        if (existingRecipe) {
            return { status: 404, data: 'Ya existe una receta con ese nombre' };
        }
        //Si no existe crea la nueva receta
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

export const handleUpdateRecipeById = async (updateData) => {

    try {
        const { recipeId, name, ingredients, instructions,image, userId } = updateData;

        // Verificar que la receta exista
        const existingRecipe = await RecipeModel.findById(recipeId);
        if (!existingRecipe) {
            return { status: 404, data: 'No existe una receta con ese ID' };
        }

        //Verificar si se está intentando cambiar el nombre de la receta 
        if (name && name !== existingRecipe.name) {
            console.log('Nombre de la receta existente:', existingRecipe.name);
            const recipesWithSameName = await RecipeModel.find({ name });
            console.log('Recetas con el mismo nombre:', recipesWithSameName);
            const conflictingRecipe = recipesWithSameName.find(recipe => !recipe._id.equals(existingRecipe._id));
            console.log('Receta conflictiva:', conflictingRecipe);
            if (conflictingRecipe) {
                return { status: 400, data: 'Ya existe una receta con ese nombre' };
            }
        
        }

        //Crear o actualizar ingredientes
        const updatedIngredients = await Promise.all(
            ingredients.map(async (ingredientData) => {
                const { _id, name, unit, cost_per_unit, quantity, remove } = ingredientData;

                if(remove){
                    return null; // Marca el ingrediente para eliminar 
                }
                //Si el ingrediente tiene un _id, se mantiene en la receta
                if (_id) {
                    return { ingredient: _id, quantity }
                } else {
                    //Crear o recuperar el ingrediente
                    const ingredient = await createOrGetIngredient({ name, unit, cost_per_unit, userId });

                    return { ingredient: ingredient._id, quantity };
                }
            })
        );
        //Filtrar los ingredientes para eliminar los marcados 
        const filteredIngredients = updatedIngredients.filter(ingredient => ingredient !== null);
        //Actualizar  la receta 
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(recipeId, { name, ingredients: filteredIngredients, instructions, image }, { new: true });
        if (!updatedRecipe) {
            return { status: 404, data: 'Receta no encontrada' };
        }
        return { status: 200, data: updatedRecipe };

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
        const result = await deleteRecipeById(recipeId);
        return { status: 200, data: result };
    } catch (error) {
        console.log('error en handleDeleteRecipeById', error);
        throw error;
    }
};


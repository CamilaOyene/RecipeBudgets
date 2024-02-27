import { RecipeModel } from "../../db/models/recipeSchema.js";
import { UserModel } from "../../db/models/userSchema.js";
import { createOrGetIngredient } from "../ingredients/ingredientServices.js";
/**
 * Servicio para crear una nueva receta.
 * @param {Object} recipeData - Datos de la receta a crear.
 * @returns {Promise<Object>} - Nueva receta creada.
 * @throws {Error} - Error en caso de fallo.
 */

export const createRecipe = async (recipeData) => {
    try {
        console.log('recipeData services', recipeData)
        //Asociar ingredientes a la receta(si no existen los crea)
        const associatedRecipeData = await associateIngredientsToRecipeAndCalculateBudget(recipeData);

        //Crear la receta en la base de datos
        const newRecipe = await RecipeModel.create(associatedRecipeData);

        //Asociar la receta al usuario
        const user = await UserModel.findById(recipeData.userId);
        user.recipes.push(newRecipe._id);
        await user.save();

        return newRecipe;
    } catch (error) {
        console.log('error en recipeService creaeteRecipe', error)
        throw error;
    }
}


/**
* Servicio para obtener todas las recetas.
* @returns {Promise<Array>} - Lista de todas las recetas.
* @throws {Error} - Error en caso de fallo.
*/
export const getAllRecipes = async () => {
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

export const updateRecipeById = async (recipeId, updatedData) => {

    try {
        const updateRecipe = await RecipeModel.findByIdAndUpdate(recipeId, updatedData, { new: true });
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
        if (!deletedRecipe) {
            throw new Error('Recipe not found');
        }
        return { message: 'Recipe deleted successfully' };
    } catch (error) {
        console.log('error en deleteRecipeById recipeService', error)
        throw error;
    }
}


/**
 * Función pata asociar ingredientes a la receta.
 * @param {Object} recipeData - Datos de la receta.
 * @returns {Promise<Object>} - Datos de la receta con ingredientes asociados y presupuesto calculado.
 * @throws {Error} - Error en caso de fallo.
 */

const associateIngredientsToRecipeAndCalculateBudget = async (recipeData) => {
    try {
        let recipe_cost = 0;

        const ingredientPromises = recipeData.ingredients.map(async (ingredientInfo) => {
            const { name, unit, cost_per_unit, quantity } = ingredientInfo;
            const userId = recipeData.userId;

            //Crea o recupera el ingrediente y lo asocia a la receta
            const ingredient = await createOrGetIngredient({ name, unit, cost_per_unit, userId });
            
            //Calcula el costo del ingrediente y lo suma al costo total de la receta
            const cost_ingredient = ( quantity * cost_per_unit) / 1000;
            recipe_cost += cost_ingredient

            //Devuelve el ingrediente con su cantidad y su costo
            return { ingredient: ingredient._id, quantity, cost_ingredient };
        })

        //Asociar los ingredientes a la receta con las cantidades y costos de ingredientes
        const associatedIngredients = await Promise.all(ingredientPromises);

        //Calcular el precio total de la receta y sumarle el IVA
        const total_price = (recipe_cost * 3)+ (recipe_cost * 0.16);
        
        //Devuelve la receta con los ingredientes asociados , costo de receta y precio total
        return { ...recipeData, ingredients: associatedIngredients, recipe_cost, total_price }
    } catch (error) {
        console.log('error en associateIngredientsToRecipeAndCalculateBudget', error)
        throw error;
    }
};

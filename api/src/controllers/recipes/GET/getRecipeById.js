const { Ingredient, Recipe } = require('../../../db');
const { Op } = require('sequelize');

const getRecipeById = async (id) => {
    const recipe = await Recipe.findOnde({
        include: [
            {
                model: Ingredient,
                attributes: ['id', 'name', 'is_available', 'cost_per_unit', 'unit']
            },
        ],
    });

    if (!recipe) {
        return { message: "Receta no encontrada" }
    }
    return recipe;
}

module.exports = getRecipeById;
const { Recipe, Ingredient} = require('../../../db');
const { Op } = require('sequelize');

const getAllRecipes = async ( ) => {
    const allRecipes = await Recipe.findAll({
      include:[
        {
            model:Ingredient,
            attributes: ['id','name','cost_per_unit', 'is_available']
        },
      ],
    });

    if(allRecipes.length === 0){
        return {message: 'Aún no hay recetas.'}
    }
    return allRecipes;
}

module.exports = getAllRecipes
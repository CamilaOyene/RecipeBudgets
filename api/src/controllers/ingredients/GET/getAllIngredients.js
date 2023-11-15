const { Ingredient } = require('../../../db');
const { all } = require('../../../routes');

const getAllIngredients = async () => {

    const allIngredients = await Ingredient.findAll({
        attributes: ['id', 'name'],
        order:[['name','ASC']]
    });

    if(allIngredients.length === 0){
        return { message:'No hay ingredientes disponibles'};
    }

    return allIngredients;
}

module.exports = getAllIngredients
const { Ingredient } = require('../../../db');

const updateIngredient = async ( id, name) => {

    const ingredient = await Ingredient.findByPk(id); 

    if(!ingredient){
        return {message: 'Ingrediente no encontrado'}
    }
    
    const ingredientModified = await ingredient.update({name});

    return ingredientModified;

};

module.exports = updateIngredient;
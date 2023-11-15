const { Ingredient, Recipe } = require('../../../db');
const { Op } = require('sequelize');


const postCreateRecipe = async ( {name, instructions, image, unit}) => {
    const formattedName = name.toLowerCase().trim();

    const existingRecipe = await Recipe.findOne({
        where:{
            name:{
                [Op.iLike]: formattedName,
            },
        },
    });

    if (existingRecipe) {
        return { message: 'Nombre de receta ya creado.'}
    }
    if(const_per_unit <= 0) {
        return { message: 'Los precios deben ser mayores que cero'}
    }
    if(unit <= 0){
        return { message: 'La cantidad debe ser mayor a 0'}
    }
//creo que esta parte no la estoy formnulando bien, para crear una receta no se si necesito verificar el costo por unidad, o si ?
//y como uno esos datos de ingredientes a la receta ? 
}

module.exports = postCreateRecipe;
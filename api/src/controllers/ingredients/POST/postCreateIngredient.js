const { Ingredient } = require('../../../db');
const { Op } = require('sequelize');


const createIngredient = async (name) => {
    //Convertir el nombre del ingrediente a minúsculas y eliminar espacios adicionales.
    const formattedName = name.toLowerCase().trim
    //Verifica si ya existe un ingrediente con el mismo nombre (ignorando min, may, esp)
    const existingIngredient = await Ingredient.findOne({
        where: {
            name: {
                [Op.iLike]: formattedName,
            }
        }
    });

    if (existingIngredient) {
        return { message: 'Este ingrediente ya existe.' };
    }

    //Crear nuevo ingrediente en base de datos.

    await Ingredient.create({name});

    //Ordenar la base de datos por orden alfabético
     const sortedIngredients = await Ingredient.findAll({
        order: [['name', 'ASC']],
     });

     return sortedIngredients;

}

module.exports = createIngredient
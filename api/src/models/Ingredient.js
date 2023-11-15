const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.definde('ingredient', {
        id: {
            type: DataTypes.UUID, // Utilizamos UUID para el ID del ingrediente
            defaultValue: DataTypes.UUIDV4, // Valor por defecto generado automáticamente
            primaryKey: true, // Hacer que este campo sea la clave primaria
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cost_per_unit: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },

    })
}
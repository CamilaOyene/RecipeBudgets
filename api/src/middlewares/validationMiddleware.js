import { body, validationResult } from 'express-validator';

export  const createIngredientValidation = [
    body('name').notEmpty().withMessage('El nombre es obligatorio.'),
    body('unit').notEmpty().withMessage('La unidad es obligatoria.'),
    body('cost_per_unit').notEmpty().isNumeric().withMessage('El costo por unidad debe ser un número.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];

export const createRecipeValidation = [
    body('userId').notEmpty().withMessage('User ID is required'),
    body('name').notEmpty().withMessage('Recipe name is required'),
    body('instructions').notEmpty().withMessage('Instructions are required'),
    body('image').notEmpty().withMessage('Image URL is required'),
    body('ingredients').notEmpty().withMessage('Ingredients should be an array'),
    body('ingredients.*.ingredient').notEmpty().withMessage('Ingredient ID is required'),
    body('ingredients.*.quantity').notEmpty().withMessage('Ingredient quantity is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];


// Middleware de validación para la actualización de recetas
export const updateRecipeValidation = [
    // Validar que el campo 'name' esté presente y no esté vacío
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
  
    // Validar que el campo 'instructions' esté presente y no esté vacío
    body('instructions').notEmpty().withMessage('Las instrucciones son obligatorias'),
  
    // Validar que el campo 'image' esté presente y no esté vacío
    body('image').notEmpty().withMessage('La imagen es obligatoria'),
  
    // Validar que el campo 'ingredients' sea un array y contenga al menos un elemento
    body('ingredients').isArray().withMessage('Los ingredientes deben ser proporcionados como una lista'),
  
    // Validar que cada elemento del array 'ingredients' tenga las propiedades necesarias
    body('ingredients.*.ingredient').notEmpty().withMessage('Cada ingrediente debe tener un ID'),
    body('ingredients.*.quantity').isNumeric().withMessage('La cantidad de cada ingrediente debe ser un número'),
  
  ];
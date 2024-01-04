import { Schema, model } from 'mongoose';

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    unit: {
        type: String,
        required: true,
    },
    cost_per_unit: {
        type: Number,
        required: true,
    },
    is_available: {
        type: Boolean,
        default: true,
    }
});

export const IngredientModel = model('ingredients', IngredientSchema);


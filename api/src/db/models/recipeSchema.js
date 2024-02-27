import mongoose, { Schema, model } from "mongoose"

const RecipeSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    ingredients: [{
        ingredient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ingredients',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        cost_ingredient:{
            type:Number
        }
    }],
    recipe_cost: {
        type: Number
    },
    total_price: {
        type: Number
    },

})

RecipeSchema.pre('find', function () {
    this.populate('ingredients')
})
export const RecipeModel = model('recipes', RecipeSchema);
import mongoose, { Schema, model } from "mongoose"

const RecipeSchema = new Schema({
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
        }
    }]

})

RecipeSchema.pre('find', function () {
    this.populate('ingredients')
})
export const RecipeModel = model('recipes', RecipeSchema);
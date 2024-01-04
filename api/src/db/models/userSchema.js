import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, default: 'user' }
});

export const UserModel = model("users", UserSchema)
import mongoose from 'mongoose';

export const connectionMongoDb = 'mongodb://127.0.0.1:27017/recipe-budgets';

async function connectToDataBase(){
    try {
        await mongoose.connect(connectionMongoDb);
        console.log('Conectado a la base de datos MongoDB ')
    } catch (error) {
        console.log(`Error => ${error}`);
    }
}

export default connectToDataBase;
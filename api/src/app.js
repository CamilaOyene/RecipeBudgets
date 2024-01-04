import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import { mongoStoreOptions } from './db/mongoStore/connectionMongo.js';
import session from 'express-session';

const app = express();

//agrega el middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(session(mongoStoreOptions));


    //crea rutas
    // app.use(routes);
    
    //middleware de errores
    app.use(errorHandler);
    

export default app 

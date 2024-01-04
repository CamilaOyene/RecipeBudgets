import connectToDataBase from './db/connectionDataBase.js';
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import { mongoStoreOptions } from './db/mongoStore/connectionMongo.js';
import session from 'express-session'

// import routes from './routes/index.js';

const app = express();

//agrega el middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(session(mongoStoreOptions));


//conectar a la base de datos antes de configurar las rutas
connectToDataBase().then(()=>{


    //crea rutas
    // app.use(routes);
    
    //middleware de errores
    app.use(errorHandler);
    
    //inicia el servidor 
    const PORT = 3000;
    
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en el puerto ${PORT}`);
    }); 
});


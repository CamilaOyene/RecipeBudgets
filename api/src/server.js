import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';

// import routes from './routes/index.js';

const app = express();

//agrega el middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//crea rutas
// app.use(routes);

//middleware de errores
app.use(errorHandler);

//inicia el servidor 
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
}); 

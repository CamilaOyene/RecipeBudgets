import connectToDataBase from './db/connectionDataBase.js';
import app from './app.js'

const PORT = 3001;
//conectar a la base de datos antes de configurar las rutas

connectToDataBase().then(() => {

    //inicia el servidor 
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en el puerto ${PORT}`);
    });
});
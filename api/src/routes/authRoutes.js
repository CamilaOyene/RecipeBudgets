import { Router } from "express";
import registerController from '../controllers/auth/POST/registerController.js';
import loginController from '../controllers/auth/POST/loginController.js';
import logoutController from "../controllers/auth/POST/logoutController.js";

const authRouter = Router()
//Ruta para el registro de usuarios 
authRouter.post('/register', registerController);
//Ruta para el inicio de sesión 
authRouter.post('/login', loginController);
//Ruta para cerrar sesión
authRouter.post('/logout', logoutController);

export default authRouter;

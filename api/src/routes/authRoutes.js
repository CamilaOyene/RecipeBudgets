import { Router } from "express";

const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/register', register)
authRouter.post('/logout', logout)




export default authRouter;

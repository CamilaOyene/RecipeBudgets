import { Router } from "express";

const userRouter = Router()

export default userRouter;

userRouter.get("/user/:userId");
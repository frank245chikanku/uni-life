import { Router } from "express";
import { AuthCollection } from "./collection";

const authRouter = Router();

const auth = new AuthCollection()


authRouter.post("/signup",auth.Register)
authRouter.post("/signin",auth.Login)


export default authRouter;
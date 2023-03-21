import express, { Request, Response, NextFunction } from "express";
import UserModel from "../4-models/user-model";
import authLogic from "../5-logic/auth-logic";


const router = express.Router()

// Router -> auth/register
router.post("/auth/register",async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const user = new UserModel(request.body)
        await authLogic.register(user)
        response.status(201).json(user)
    }
    catch (err) {
        next(err)
    }
})

export default router
import express, {NextFunction, Request, Response} from "express"
import homeLogic from "../5-logic/home-logic"

const router = express.Router()

router.get("/home",async (request: Request, response:Response, next: NextFunction)=>{

    try {
        const users = await homeLogic.getAllUsers()
        console.log(users)
        response.status(200).json(users)
    }
    catch (err) {
        next(err)
    }

})

export default router
import {Request,Response,NextFunction} from "express"
import { JWT_SECRET_KEY } from "../config/env"
import * as jwt from "jsonwebtoken"
import { User } from "../model/Users"
export const auth = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.headers["authorization"]?.split(' ')[1]
        const decodeToken: any = jwt.verify(token!,JWT_SECRET_KEY!)
        const user = await User.findOne({'_id': decodeToken['_id']})
        console.log(user)
        if(!user){
            res.status(401).json({message:"User not found"})
            return;
        }
        (req as any)['user'] = user;
        next()
        return 0;
    } catch (error) {
        res.status(500).json({message:"Unauthorized"})
    }
}
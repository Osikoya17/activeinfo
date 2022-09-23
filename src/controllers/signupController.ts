import {Request,Response} from "express"
import { User } from "../model/Users"
import * as jwt  from "jsonwebtoken"
import { Types } from "mongoose"
import { JWT_SECRET_KEY } from "../config/env"
import {handleError} from "./errorsController"
const maxAge = 30*60*60
const createToken  = (id:Types.ObjectId) =>{
    return jwt.sign({id},JWT_SECRET_KEY!,{
        expiresIn:maxAge
    })
}
export const Signup = async(req:Request,res:Response) =>{
    const {username,email,password} = req.body   
    try {
        const users = await User.create({
            username,
            email,
            password
        })
        const token = createToken(users._id)
        res.status(201).json({user:users._id})
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
} 
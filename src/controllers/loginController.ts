import {Request,Response} from "express"
import { User } from "../model/Users"
import bcrypt from "bcrypt"
import { Types } from "mongoose"
import * as jwt  from "jsonwebtoken"
import { JWT_SECRET_KEY } from "../config/env"
export const Login = async(req:Request,res:Response) =>{
    const {email,password} = req.body
    const maxAge = 30*60*60
    const createToken  = (id:Types.ObjectId) =>{
    return jwt.sign({id},JWT_SECRET_KEY!,{
        expiresIn:maxAge
    })}
    try {
        const user = await User.findOne({email})
            if (user){
                const auth = await bcrypt.compare(password,user.password)
                if(auth){
                    const token = createToken(user._id)
                    res.status(200).json({user:user,token:token,message:"User login successful"})
                }
                else{
                    res.status(401).json({message:"Invaild Password"});
                }
            }
            else{
                res.status(401).json({message:"User Not Found"})
            }
    } catch (error) {
        console.log(error);   
    }
} 
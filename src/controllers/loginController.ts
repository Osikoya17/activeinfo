import {Request,Response} from "express"
import { User } from "../model/Users"
import bcrypt from "bcrypt"
export const Login = async(req:Request,res:Response) =>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
            if (user){
                const auth = await bcrypt.compare(password,user.password)
                if(auth){
                    res.status(200).json({user:user._id})
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
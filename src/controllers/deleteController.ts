import {Request,Response} from "express"
import { Blog } from "../model/Blogs"
export const Delete = async (req:Request,res:Response) =>{
    const {id} = req.body
    try {
        const blog = await Blog.findByIdAndDelete(id)
        res.status(200).json({message:"Deleted"})
    } catch (error) {
        res.status(500).json(error)
    }
} 
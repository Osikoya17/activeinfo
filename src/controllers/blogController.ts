import {Request,Response} from "express"
import {Blog} from "../model/Blogs"
export const Blogs = async(req:Request,res:Response) =>{
    try {
        const blog = await Blog.find({})
        res.status(200).json({blog:blog})
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({message:"Blog"})
} 

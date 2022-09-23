import {Request,Response} from "express"
import { Blog } from "../model/Blogs"
import {blogErrors} from "./errorsController"
import * as fs from "fs"
import path from "path"
export const Upload = async(req:Request,res:Response) =>{
    const {title,story,author,category} = req.body
    try {
        const blog = await Blog.create({
            title:title,
            story:story,
            author:author,
            category:category,
            image:{
                data:fs.readFileSync(path.join(__dirname,"..","public/"+ req.file?.filename)),
                contentType:"image/jpg"
            }
        })
        res.status(200).json({message:"Uploaded Successfully"})
    } catch (error) {
        const errors = blogErrors(error)
        res.status(400).json({errors})
    }
}

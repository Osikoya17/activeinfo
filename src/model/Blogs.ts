import { model, Schema } from "mongoose";
const blogSchema = new Schema({
    title:{
        type:Schema.Types.String,
        required:[true,"Please enter a Title"]
    },
    story:{
        type:Schema.Types.String,
        required:[true,"Please enter your story"]
    },
    category:{
        type:Schema.Types.String,
        required:[true,"Please enter the category of your story"]
    },
    author:{
        type:Schema.Types.String,
        required:[true,"Please enter the author's name"]
    },
    image:{
        contentType:Schema.Types.String,
        data:Buffer
        
    },
    video:{
        contentType:Schema.Types.String,
        data:Buffer
    }
},{
    timestamps:true
}
)

export const Blog = model("post",blogSchema)
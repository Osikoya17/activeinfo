import { model, Schema } from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new Schema({
    firstname:{
        type:Schema.Types.String,
    },
    lastname:{
        type:Schema.Types.String
    },
    email:{
        type:Schema.Types.String,
        required:[true,"Please enter an Email"],
        unique:true
    },
    username:{
        type:Schema.Types.String,
        required:[true,"Please enter a Username"]
    },
    password:{
        type:Schema.Types.String,
        minlength:[6,"Minimum Password length is 6 characters"],
        required:true
    },
    image:{
        contentType:Schema.Types.String,
        data:Buffer
    }
})
userSchema.pre("save",async function(next){
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password,salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        console.log(error);
    }
})
export const User = model("user",userSchema)

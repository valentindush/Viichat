import mongoose from "mongoose"

interface User{
    name:string,
    username:string,
    email:string,
    password:string
}

const userSchema = new mongoose.Schema<User>({
    name:{
        type:String,
        required:true,
        minlength: 3
    },
    username:{
        type: String,
        required:true,
        minlength: 3
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model<User>("User", userSchema)
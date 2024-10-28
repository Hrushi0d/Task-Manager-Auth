import mongoose, { Model, Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true,},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

export const user = mongoose.model('Users', taskSchema);
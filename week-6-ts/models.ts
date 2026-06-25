import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : String,
    password : String
})

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String
})

export const UserModel = mongoose.model("user",UserSchema);
export const TodoModel = mongoose.model("todo",TodoSchema);

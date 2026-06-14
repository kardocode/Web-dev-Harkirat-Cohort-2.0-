const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);
//mongoose schema and model object

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const TodoSchema = new mongoose.Schema({
    title:String,
    description:String,
    userId:mongoose.Types.ObjectId
});

const userModel = mongoose.model("users", UserSchema);
const todoModel = mongoose.model("todos", TodoSchema);

module.exports = {
    userModel: userModel,
    todoModel: todoModel
}
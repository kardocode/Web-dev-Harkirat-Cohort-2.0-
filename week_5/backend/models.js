const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const UserSchema = new mongoose.Schema({
    username:String,
    password : String
})

const OrgSchema = new mongoose.Schema({
    title:String,
    description:String,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
})

const BoardSchema = new mongoose.Schema({
    title:String,
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "organisation"
    }
})

const IssueSchema = new mongoose.Schema({
    title : String,
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "board"
    },
    status: {
        type: String,
        enum: [
            "NEXT_UP",
            "IN_PROGRESS",
            "DONE"
        ],
        default: "NEXT_UP"
    }
})

const userModel = mongoose.model("users",UserSchema);
const orgModel = mongoose.model("organisation",OrgSchema);
const boardModel = mongoose.model("board",BoardSchema);
const issueModel = mongoose.model("issues",IssueSchema);


module.exports = {
    userModel : userModel,
    orgModel : orgModel,
    boardModel : boardModel,
    issueModel : issueModel
}
import {model, Types, Schema} from "mongoose";

const post = new Schema({
    owner : { type : Types.ObjectId, ref : 'user', required : true },
    title : {type : String, required : true},
    description : {type : String, required : true},
    image : String,
    comment : [{
        comUser :[{ type : Types.ObjectId, ref : 'user'}],
        message : String,
        timeStamp : String
    }],
    timeStamp : String
})
const postSchema = model('post', post)

export default postSchema


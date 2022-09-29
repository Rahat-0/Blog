import {model, Types, Schema} from "mongoose";

const user = new Schema({
    name : {type : String, required : true},
    password : {type : String, required : true},
    email : {type : String, required: true}, 
    phone : {type : String, required : true},
    image : String,
    join : Number
})
const userSchema = model('user', user)

export default userSchema


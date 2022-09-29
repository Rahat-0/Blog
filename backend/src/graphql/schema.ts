import { buildSchema } from "graphql";

const schema = buildSchema(`

type CommentUser{
    _id : String,
    name : String
}

type Comments{
    message : String,
    timeStamp : Float,
    comUser : [CommentUser]

}

type UserPost{
    _id : String,
    title : String,
    description : String,
    image : String,
    timeStamp : Float,
    comment : [Comments]
}
type User{
    _id : String,
    name : String,
    email : String,
    phone : String,
    image : String,
    join : Float
}

type Post{
    _id : String,
    owner : String,
    title : String,
    description : String,
    image : String,
    timeStamp : Float,
    comment : [Comments]
}


type Query{
    user : [User],
    FindPostByUser(owner : String) : [Post]
}
`)



export default schema
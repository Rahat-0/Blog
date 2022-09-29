import postSchema from "../db/models/postSchema";
import userSchema from "../db/models/userSchema";

const resolver = {
    name : ()=>{
        return {name : 'rahat'}
    },

    user : async ()=>{
        try {
            const user = await userSchema.find()
            console.log(user);
            return user
            
          } catch (error : any) {
            return error?.message
          }
    },

    FindPostByUser :async (owner: String) => {
      try {
        console.log(owner);
        const post = await postSchema.find(owner)
        console.log(post);
        return post
        
      } catch (error : any) {
        return error?.message
      }
    }
}

export default resolver
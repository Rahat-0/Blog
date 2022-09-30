import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import postResolver from "../post/postResolver";
import { postFindArgs, postType } from "../post/postType";
import userResolver from "../user/userResolver";
import { userFindArgs, userType } from "../user/userType";

// Root Query declaration start from here
const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "represent the root query",
  fields: () => ({
    // user query section start from here.
    user: {
      type: new GraphQLList(userType),
      args: userFindArgs,
      resolve: (current, args) => userResolver.user(args),
    },

    // post query section start from here.
    post: {
      type: new GraphQLList(postType),
      args: postFindArgs,
      resolve: (current, args) => postResolver.post(args),
    },

    // another query section will be start from here
  }),
});

export default RootQueryType;

import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import postResolver from "../post/postResolver";
import { postCreateArgs, postType, postUpdateArgs } from "../post/postType";
import userResolver from "../user/userResolver";
import { userInputArgs, userType, userUpdateArgs } from "../user/userType";

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "root mutation type",
  fields: () => ({
    // user creation function.
    userCreate: {
      type: userType,
      args: userInputArgs,
      resolve: (current, arg) => userResolver.userCreate(arg),
    },

    // user update function.
    userUpdate: {
      type: userType,
      args: userUpdateArgs,
      resolve: (current, args) => userResolver.userUpdate(args),
    },

    // user delete function
    userDelete: {
      type: userType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (current, args) => userResolver.userDelete(args),
    },

    // post create function start from here
    postCreate: {
      type: postType,
      description: "post creation type",
      args: postCreateArgs,
      resolve: (current, args) => postResolver.postCreate(args),
    },

    // post update function start from here
    postUpdate: {
      type: postType,
      description: "represent the post update data",
      args: postUpdateArgs,
      resolve: (current, args) => postResolver.postUpdate(args),
    },

    // post delete function
    postDelete: {
      type: postType,
      description: "represent the post delete data type",
      args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve: (current, args) => postResolver.postDelete(args),
    },
  }),
});

export default RootMutationType;

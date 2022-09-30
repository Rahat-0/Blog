import {
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const comUserType = new GraphQLObjectType({
  name: "userComment",
  description: "represent the user comments",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const commentType = new GraphQLObjectType({
  name: "comment",
  description: "represent single comment",
  fields: () => ({
    comUser: { type: comUserType },
    message: { type: GraphQLString },
    timeStamp: { type: GraphQLFloat },
  }),
});

export const postType = new GraphQLObjectType({
  name: "post",
  description: "represent the all post",
  fields: () => ({
    _id: { type: GraphQLString },
    owner: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    timeStamp: { type: GraphQLFloat },
    comment: { type: new GraphQLList(commentType) },
  }),
});

export const postFindArgs = {
  _id: { type: GraphQLString },
  owner: { type: GraphQLString },
  title: { type: GraphQLString },
};

export const postCreateArgs = {
  owner: { type: new GraphQLNonNull(GraphQLString) },
  title: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  image: { type: GraphQLString },
};

export const postUpdateArgs = {
  _id: { type: new GraphQLNonNull(GraphQLString) },
  title: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  image: { type: GraphQLString },
};

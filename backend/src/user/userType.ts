import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
} from "graphql";

// complete user information type 
export const userType: GraphQLObjectType = new GraphQLObjectType({
  name: "user",
  description: "describe all user",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    image: { type: GraphQLString },
    join: { type: GraphQLFloat },
  }),
});

// user find arguments, find by _id, name, and email.
export const userFindArgs = {
  _id: { type: GraphQLString },
  name: { type: GraphQLString },
  email: { type: GraphQLString },
};

// user update arguments, update with _id, name, email, and phone.
export const userUpdateArgs = {
  _id: { type: new GraphQLNonNull(GraphQLString) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  email: { type: new GraphQLNonNull(GraphQLString) },
  phone: { type: new GraphQLNonNull(GraphQLString) },
};

// user input arguments, this args use for user creation purpose.
export const userInputArgs = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  email: { type: new GraphQLNonNull(GraphQLString) },
  phone: { type: new GraphQLNonNull(GraphQLString) },
  password: { type: new GraphQLNonNull(GraphQLString) },
  Image: { type: GraphQLString },
};

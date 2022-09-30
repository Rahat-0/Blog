import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import RootMutationType from "./mutation";
import RootQueryType from "./query";

// root schema declaration start from here
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

// graphQL HTTP config
const graphql = graphqlHTTP({
  schema,
  graphiql: true,
});

export default graphql;

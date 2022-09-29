import {graphqlHTTP} from 'express-graphql'
import resolver from './resolver'
import schema from './schema'

const graphql = graphqlHTTP({
    schema,
    graphiql : true,
    rootValue : resolver,
})

export default graphql
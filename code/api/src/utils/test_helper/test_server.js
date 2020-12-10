import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

const testServer = express();
testServer.use(
  "/",
  graphqlHTTP({
    schema: schema,
    graphiql: false
  })
)

export default testServer;

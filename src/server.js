import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import resolvers from './resolvers/resolvers'

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const app = express();

server.applyMiddleware({ app });

app.listen(3000, function () {
    console.log('Graphql server initiated.');
});
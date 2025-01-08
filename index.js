// Import required modules
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs} = require('./graphql/typeDefinitions');
const {resolvers }= require('./graphql/resolvers');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app and Apollo Server
const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen({ port: process.env.PORT }, () => {
    console.log(`Server is running at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer().catch(error => {
  console.error("Failed to start the server:", error);
});

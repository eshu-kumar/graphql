import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./data/resolvers.graphql";
import { typeDefs } from "./data/schema.graphql";
import { PORT } from "./config/config";

/**
 * Create an Apollo server instance.
 */
// //
//setenv();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return { req, res };
  },
});

/**
 * Create an express server and apply the Apollo Server middleware
 */
const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () => {
    console.log(
      `Server is running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});

app.get("/", (req, res) => {
  console.log("Apollo GraphQL Express server is ready");
});

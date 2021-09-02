import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  path: "graphql/v1",
});

export default apolloServer;

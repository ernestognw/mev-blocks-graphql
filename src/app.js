import express from "express";
import graphqlServer from "./graphql";

const startApp = async () => {
  const app = express();

  await graphqlServer.start();

  graphqlServer.applyMiddleware({
    app,
  });

  return app;
};

export default startApp;

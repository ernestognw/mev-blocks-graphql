import { port } from '@config/environment';
import graphqlServer from '@graphql';
import app from './app';

const start = async () => {
  try {
    await graphqlServer.start();
    graphqlServer.applyMiddleware({
      app,
    });
    await app.listen(port);
    console.info(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.info('Not able to run GraphQL server');
  }
};

start();

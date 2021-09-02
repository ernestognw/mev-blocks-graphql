import { port } from '@config/environment';
import startApp from './app';

const start = async () => {
  try {
    const app = await startApp();
    await app.listen(port);
    console.info(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.info('Not able to run GraphQL server');
  }
};

start();

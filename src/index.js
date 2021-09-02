import { port } from "@config/environment";
import startApp from "./app";
import app from "./app";

const start = async () => {
  try {
    const app = await startApp();
    await app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log("Not able to run GraphQL server");
  }
};

start();

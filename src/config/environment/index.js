import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

export { port, env };

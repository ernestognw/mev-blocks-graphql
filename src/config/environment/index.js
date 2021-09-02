import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  staging: process.env.NODE_ENV === "staging",
  production: process.env.NODE_ENV === "production",
};

const flashbots = {
  mevBlocksBaseUrl: process.env.MEV_BLOCKS_BASE_URL,
};

export { port, env, flashbots };

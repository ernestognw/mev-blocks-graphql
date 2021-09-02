import { blockQueries } from "./blocks";
import { transactionQueries } from "./transactions";

const resolvers = {
  Query: {
    ...blockQueries,
    ...transactionQueries,
  },
};

export default resolvers;

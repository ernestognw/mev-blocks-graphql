import { blockQueries } from "./blocks";
import { transactionQueries, transactionFields } from "./transactions";

const resolvers = {
  Query: {
    ...blockQueries,
    ...transactionQueries,
  },
  Transaction: {
    ...transactionFields,
  },
};

export default resolvers;

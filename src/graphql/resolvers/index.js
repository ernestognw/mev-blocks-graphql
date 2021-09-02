import { blocksQueries } from "./blocks";
import { transactionsQueries } from "./transactions";

const resolvers = {
  Query: {
    ...blocksQueries,
    ...transactionsQueries,
  },
};

export default resolvers;

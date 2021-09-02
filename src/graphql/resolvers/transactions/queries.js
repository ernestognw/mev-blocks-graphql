import { mevBlocks } from "third-party/flashbots";
import qs from "query-string";

const transactionQueries = {
  transactions: async (_, { before, limit }) => {
    const params = qs.stringify({ before, limit });

    const {
      data: { transactions },
    } = await mevBlocks.get(`/transactions?${params}`);

    return transactions;
  },
};

export default transactionQueries;

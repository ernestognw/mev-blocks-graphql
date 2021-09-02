import { mevBlocks } from '@third-party/flashbots';
import { blockQueries } from './blocks';
import { transactionQueries, transactionFields } from './transactions';

const resolvers = {
  Query: {
    latest_block_number: async () => {
      const {
        data: { latest_block_number },
      } = await mevBlocks.get('/blocks?limit=0');

      return latest_block_number;
    },
    ...blockQueries,
    ...transactionQueries,
  },
  Transaction: {
    ...transactionFields,
  },
};

export default resolvers;

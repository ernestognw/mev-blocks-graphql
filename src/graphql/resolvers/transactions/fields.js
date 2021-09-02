import { mevBlocks } from '@third-party/flashbots';
import qs from 'query-string';

const transactionFields = {
  block: async ({ block_number }) => {
    const params = qs.stringify({ block_number });

    const {
      data: { blocks },
    } = await mevBlocks.get(`/blocks?${params}`);

    return blocks?.[0];
  },
};

export default transactionFields;

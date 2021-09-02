import { mevBlocks } from "third-party/flashbots";
import qs from "query-string";

const blockQueries = {
  blocks: async (_, { miner, from, before, limit }) => {
    const params = qs.stringify({ miner, from, before, limit });

    const {
      data: { blocks },
    } = await mevBlocks.get(`/blocks?${params}`);

    return blocks;
  },
  block: async (_, { block_number }) => {
    const params = qs.stringify({ block_number });

    const {
      data: { blocks },
    } = await mevBlocks.get(`/blocks?${params}`);

    return blocks?.[0];
  },
};

export default blockQueries;

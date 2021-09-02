import axios from 'axios';
import { flashbots } from '@config/environment';

const mevBlocks = axios.create({
  baseURL: flashbots.mevBlocksBaseUrl,
});

export { mevBlocks };

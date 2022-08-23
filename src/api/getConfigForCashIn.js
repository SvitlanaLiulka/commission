import axios from 'axios';
import { API_CASH_IN } from '../constants/urlForAPI.js';

export const getConfigForCashIn = async () => {
  try {
    const configAPI = await axios.get(API_CASH_IN);
    return { cashIn: configAPI.data };
  } catch (err) {
    if (err.status !== 200) {
      console.error(`Something was wrong ${err.message}`);
      process.exit();
    }
  }

  return {};
};

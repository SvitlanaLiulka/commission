import axios from 'axios';
import { API_CASH_OUT_NATURAL } from '../constants/urlForAPI.js';

export const getConfigCashOutNatural = async () => {
  try {
    const configAPI = await axios.get(API_CASH_OUT_NATURAL);
    return { cashOutNatural: configAPI.data };
  } catch (err) {
      if (err.status !== 200) {
      console.error(err.message);
      process.exit()
    }
  }
}

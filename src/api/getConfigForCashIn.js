import axios from 'axios';
import { API_CASH_IN } from '../constants/urlForAPI.js';

export const getConfigForCashIn = async () => {
  const configAPI = await axios.get(API_CASH_IN).catch((error) => console.error(error.message));

  return { cashIn: configAPI.data };
}

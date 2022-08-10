import axios from 'axios';
import { API_CASH_OUT_NATURAL } from '../constants/urlForAPI.js';

export const getConfigCashOutNatural = async () => {
  const configAPI = await axios.get(API_CASH_OUT_NATURAL).catch((error) => console.log(error.message));

  return { cashOutNatural: configAPI.data };
}

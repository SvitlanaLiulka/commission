import axios from 'axios';
import { API_CASH_OUT_LEGAL } from '../constants/urlForAPI.js';

export const getConfigCashOutLegal = async () => {
  const configAPI = await axios.get(API_CASH_OUT_LEGAL).catch((error) => console.error(error.message));

  return { cashOutLegal: configAPI.data };
}

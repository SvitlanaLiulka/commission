import axios from 'axios';
import { API_CASH_OUT_NATURAL } from '../constants/urlAPI.js';

export const getCashOutNatural = async () => {
  const result = await axios.get(API_CASH_OUT_NATURAL);

  return { cashOutNatural: result.data };
}

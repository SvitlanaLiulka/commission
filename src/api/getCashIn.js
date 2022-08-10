import axios from 'axios';
import { API_CASH_IN } from '../constants/urlAPI.js';

export const getCashIn = async () => {
  const result = await axios.get(API_CASH_IN);

  return { cashIn: result.data };
}

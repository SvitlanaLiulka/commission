import axios from 'axios';
import { API_CASH_OUT_LEGAL } from '../constants/urlAPI.js';

export const getCashOutLegal = async () => {
  const result = await axios.get(API_CASH_OUT_LEGAL);

  return { cashOutLegal: result.data };
}

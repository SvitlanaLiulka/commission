import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl.js';

export const getCashOutLegal = async () => {
  const result = await axios.get(`${BASE_URL}/cash-out-juridical`);

  return { cashOutLegal: result.data };
}

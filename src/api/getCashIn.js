import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl.js';

export const getCashIn = async () => {
  const result = await axios.get(`${BASE_URL}/cash-in`);

  return { cashIn: result.data };
}

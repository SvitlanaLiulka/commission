import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl.js';

export const getCashOutNatural = async () => {
  const result = await axios.get(`${BASE_URL}/cash-out-natural`);

  return { cashOutNatural: result.data };
}

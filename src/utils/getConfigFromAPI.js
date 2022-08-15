import { getConfigForCashIn } from '../api/getConfigForCashIn.js';
import { getConfigCashOutLegal } from '../api/getConfigCashOutLegal.js';
import { getConfigCashOutNatural } from '../api/getConfigCashOutNatural.js';

export const getConfigFromAPI = () => {
  const dataConfigAPI = [
    getConfigForCashIn(),
    getConfigCashOutLegal(),
    getConfigCashOutNatural(),
  ];

  return Promise.all(dataConfigAPI).then((response) => (
    response.reduce((accumulator, currentValue) => (
    { ...accumulator, ...currentValue }), {})
  ))
    .catch((error) => console.error(error.message));
}

import { getCashIn } from '../api/getCashIn.js';
import { getCashOutLegal } from '../api/getCashOutLegal.js';
import { getCashOutNatural } from '../api/getCashOutNatural.js';

export const dataFromAPI = () => {
  const data = [
    getCashIn(),
    getCashOutLegal(),
    getCashOutNatural(),
  ];

  return Promise.all(data).then((response) => (
    response.reduce((accumulator, currentValue) => (
    { ...accumulator, ...currentValue }), {})
  ));
}
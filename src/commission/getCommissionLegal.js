import { getPercent } from '../utils/getPersent.js';

export const getCommissionLegal = (value, data) => {
  const { cashOutLegal } = data;
  const percent = getPercent(value, cashOutLegal.percents);
    if (percent < cashOutLegal.min.amount) {
      console.log(cashOutLegal.min.amount.toFixed(2));
      return cashOutLegal.min.amount.toFixed(2)
    }
      console.log(percent.toFixed(2));
      return percent.toFixed(2);
};

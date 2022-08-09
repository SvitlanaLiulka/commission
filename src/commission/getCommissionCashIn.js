import { getPercent } from '../utils/getPersent.js';

export const getCommissionCashIn = (value, data) => {
 const { cashIn } = data;
  const percent = getPercent(value, cashIn.percents);
    if (percent > cashIn.max.amount) {
      console.log(cashIn.max.amount.toFixed(2));
      return cashIn.max.amount.toFixed(2)
    }
      console.log(percent.toFixed(2));

      return percent.toFixed(2);
};

import { getPercent } from '../utils/getPercent.js';

export const getCommissionCashIn = (value, commissionConfig) => {
  const { cashIn } = commissionConfig;
  const percent = (getPercent(value, cashIn.percents)).toFixed(2);

  console.log(percent > cashIn.max.amount ? cashIn.max.amount.toFixed(2) : percent);
  return percent > cashIn.max.amount ? cashIn.max.amount.toFixed(2) : percent;
};

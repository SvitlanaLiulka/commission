import { getPercent } from '../utils/getPercent.js';

export const getCommissionCashIn = (operationAmount, commissionConfig) => {
  const { cashIn } = commissionConfig;
  const percent = (getPercent(operationAmount, cashIn.percents)).toFixed(2);

    return percent > cashIn.max.amount ? cashIn.max.amount.toFixed(2) : percent;
};

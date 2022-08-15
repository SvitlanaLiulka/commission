import { getPercent } from '../utils/getPercent.js';
import { getDecimalAdjust } from '../utils/getDecimalAdjust.js';

export const getCommissionCashIn = (operationAmount, commissionConfig) => {
  const { cashIn } = commissionConfig;
  const percent = getPercent(operationAmount, cashIn.percents);
  return percent > cashIn.max.amount ? getDecimalAdjust(cashIn.max.amount) : getDecimalAdjust(percent);
};

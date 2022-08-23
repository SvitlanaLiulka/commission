import { getPercent } from '../utils/getPercent.js';
import { getDecimalAdjust } from '../utils/getDecimalAdjust.js';

export const getCommissionCashIn = (operationAmount, commissionConfig) => {
  const { cashIn: { percents, max: { amount } } } = commissionConfig;
  const percent = getPercent(operationAmount, percents);
  return percent > amount ? getDecimalAdjust(amount) : getDecimalAdjust(percent);
};

import { getPercent } from '../utils/getPercent.js';
import { getDecimalAdjust } from '../utils/getDecimalAdjust.js';

export const getCommissionCashOutLegal = (operationAmount, commissionConfig) => {
  const { cashOutLegal: { percents, min: { amount } } } = commissionConfig;
  const percent = getPercent(operationAmount, percents);
  return percent < amount ? getDecimalAdjust(amount) : getDecimalAdjust(percent);
};

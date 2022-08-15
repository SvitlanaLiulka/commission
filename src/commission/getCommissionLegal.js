import { getPercent } from '../utils/getPercent.js';
import { getDecimalAdjust } from '../utils/getDecimalAdjust.js';

export const getCommissionCashOutLegal = (operationAmount, commissionConfig) => {
  const { cashOutLegal } = commissionConfig;
  const percent = getPercent(operationAmount, cashOutLegal.percents);
  return percent < cashOutLegal.min.amount ? getDecimalAdjust(cashOutLegal.min.amount) : getDecimalAdjust(percent);
};

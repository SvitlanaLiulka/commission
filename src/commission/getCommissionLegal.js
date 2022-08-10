import { getPercent } from '../utils/getPercent.js';

export const getCommissionCashOutLegal = (operationAmount, commissionConfig) => {
  const { cashOutLegal } = commissionConfig;
  const percent = (getPercent(operationAmount, cashOutLegal.percents)).toFixed(2);

    return percent < cashOutLegal.min.amount ? cashOutLegal.min.amount.toFixed(2) : percent;
};

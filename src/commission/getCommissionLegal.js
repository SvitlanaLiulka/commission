import { getPercent } from '../utils/getPercent.js';

export const getCommissionCashOutLegal = (value, commissionConfig) => {
  const { cashOutLegal } = commissionConfig;
  const percent = (getPercent(value, cashOutLegal.percents)).toFixed(2);

    return percent < cashOutLegal.min.amount ? cashOutLegal.min.amount.toFixed(2) : percent;
};

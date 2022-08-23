import { getPercent } from '../utils/getPercent.js';
import { getWeekNumber } from '../utils/getWeekNumber.js';
import { getDecimalAdjust } from '../utils/getDecimalAdjust.js';

const usersId = {};

export const getCommissionCashOutNatural = (
  operationAmount,
  commissionConfig,
  date,
  currentUserId,
) => {
  const { percents, week_limit: { amount } } = commissionConfig.cashOutNatural;
  const numberOfCurrentWeek = getWeekNumber(date);
  const currentUser = usersId[currentUserId];
  const currentWeek = currentUser && currentUser[numberOfCurrentWeek];

  let amountLimitOfWeek = currentWeek?.amountLimitOfWeek ?? amount;
  let commissionAmount;

  if (operationAmount > amountLimitOfWeek) {
    commissionAmount = getPercent(operationAmount - amountLimitOfWeek, percents);
    amountLimitOfWeek = 0;
  } else {
    amountLimitOfWeek -= operationAmount;
    commissionAmount = 0;
  }

  usersId[currentUserId] = {
    [numberOfCurrentWeek]: {
      commissionAmount,
      amountLimitOfWeek,
    },
  };

  return getDecimalAdjust(usersId[currentUserId][numberOfCurrentWeek].commissionAmount);
};

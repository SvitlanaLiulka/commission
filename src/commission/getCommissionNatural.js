import { getPercent } from '../utils/getPercent.js';
import { getWeekNumber } from '../utils/getWeekNumber.js';
import { getDecimalAdjust } from '../utils/getDecimalAdjust.js';

const usersId = {};

export const getCommissionCashOutNatural = (operationAmount, commissionConfig, date, user_id) => {
  const { percents, week_limit } = commissionConfig.cashOutNatural;
  const numberOfCurrentWeek = getWeekNumber(date);
  const currentUser = usersId[user_id];
  const currentWeek = currentUser && currentUser[numberOfCurrentWeek];

  let amountLimitOfWeek = currentWeek?.amountLimitOfWeek ?? week_limit.amount;
  let commissionAmount;

  if (operationAmount > amountLimitOfWeek) {
    commissionAmount = getPercent(operationAmount - amountLimitOfWeek, percents);
    amountLimitOfWeek = 0;
  } else {
      amountLimitOfWeek -= operationAmount;
      commissionAmount = 0;
    }

  usersId[user_id] = {
    [numberOfCurrentWeek]: {
      commissionAmount,
      amountLimitOfWeek,
    }
  }

  return getDecimalAdjust(usersId[user_id][numberOfCurrentWeek].commissionAmount);
}

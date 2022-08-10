import moment from 'moment';
import { getPercent } from '../utils/getPercent.js';

const usersId = {};

export const getCommissionCashOutNatural = (operationAmount, commissionConfig, date, user_id) => {
  const { percents, week_limit } = commissionConfig.cashOutNatural;

  const numberOfWeek = moment(date).locale('uk').week();
  const currentUser = usersId[user_id];
  const sameWeek = currentUser && currentUser[numberOfWeek];
  const sameWeekAmount = sameWeek && sameWeek.amount - operationAmount;
  const restWeekLimit = week_limit.amount - operationAmount;

  let limitOperation = sameWeekAmount || restWeekLimit;
  let commissionAmount = operationAmount;

  if (operationAmount) {
    if(sameWeekAmount < 0) {
      operationAmount -= sameWeek.amount;
      commissionAmount = getPercent(operationAmount, percents);
      limitOperation = 0;
    }
    else if (restWeekLimit < 0) {
      operationAmount -= week_limit.amount;
      commissionAmount = getPercent(operationAmount, percents);
      limitOperation = 0;
    }
    else { commissionAmount = 0 }
  }
    usersId[user_id] = {
      [numberOfWeek]: {
        value: commissionAmount,
        amount: limitOperation,
    }}

    return (usersId[user_id][numberOfWeek].value).toFixed(2);
};

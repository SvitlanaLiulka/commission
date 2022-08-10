import moment from 'moment';
import { getPercent } from '../utils/getPercent.js';

const userId = {};

export const getCommissionCashOutNatural = (value, data, date, user_id) => {
  const { cashOutNatural } = data;
  const numberOfWeek = moment(date).locale('uk').week();
  const user = userId[user_id];
  const sameWeek = user && user[numberOfWeek];
  const amountForSameWeek = sameWeek && sameWeek.amount - value;
  let newAmount = amountForSameWeek || cashOutNatural.week_limit.amount - value;
  let newValue = value;

  if (newValue) {
    if(amountForSameWeek < 0) {
      newValue = newValue - sameWeek.amount;
      newValue = getPercent(
        newValue,
        cashOutNatural.percents,
      );
      newAmount = 0;
    } else if (cashOutNatural.week_limit.amount - value < 0) {
      newValue = newValue - cashOutNatural.week_limit.amount;
        newValue = getPercent(
        newValue,
        cashOutNatural.percents,
        );
      newAmount = 0;
    }
    else {newValue = 0}
  }
    userId[user_id] = {
      [numberOfWeek]: {
        value: newValue,
        amount: newAmount,
    }}
    console.log((userId[user_id][numberOfWeek].value).toFixed(2));

    return (userId[user_id][numberOfWeek].value).toFixed(2);
};

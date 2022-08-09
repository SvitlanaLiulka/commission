import moment from 'moment';
import { getPercent } from '../utils/getPersent.js';

const userId = {};

const getCommissionNatural = (
  data,
  value,
  sameWeek,
  user_id,
  numberOfWeek,
) => {
  const { cashOutNatural } = data;
  const amountForSameWeek = sameWeek && sameWeek.amount - value;
  const amount = cashOutNatural.week_limit.amount - value;
  let newAmount = amountForSameWeek || amount;
  let newValue = value;

    switch (true) {
      case amountForSameWeek < 0:
        newValue = newValue - sameWeek.amount;
        newValue = getPercent(
          newValue,
          cashOutNatural.percents,
        );
        newAmount = 0;
        break;
      case !sameWeek && amount < 0:
        newValue = newValue - cashOutNatural.week_limit.amount;
        newValue = getPercent(
          newValue,
          cashOutNatural.percents,
        );
        newAmount = 0;
        break;
      default:
        newValue = 0;
    }
    userId[user_id] = {
      [numberOfWeek]: {
        value: newValue,
        amount: newAmount,
    }}
    console.log((userId[user_id][numberOfWeek].value).toFixed(2));

    return (userId[user_id][numberOfWeek].value).toFixed(2);
};

export const cashOutCommissionNatural  = (value, data, date, user_id) => {
  const numberOfWeek = moment(date).locale('uk').week();
  const user = userId[user_id];
  const sameWeek = user && user[numberOfWeek];

  return getCommissionNatural (
    data,
    value,
    sameWeek,
    user_id,
    numberOfWeek,
  );
};

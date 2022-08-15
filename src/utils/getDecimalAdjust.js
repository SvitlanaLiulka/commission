export const getDecimalAdjust = (percent, ceiledValue) => {
  if (typeof ceiledValue === 'undefined' || ceiledValue === 0) {
    return Math.ceil(percent);
  }

  percent = +percent;
  ceiledValue = +ceiledValue;

  percent = percent.toString().split('e');
  percent = Math.ceil(+(percent[0] + 'e' + (percent[1] ? (+percent[1] - ceiledValue) : -ceiledValue)));

  percent = percent.toString().split('e');
  return (+(percent[0] + 'e' + (percent[1] ? (+percent[1] + ceiledValue) : ceiledValue))).toFixed(2);
};

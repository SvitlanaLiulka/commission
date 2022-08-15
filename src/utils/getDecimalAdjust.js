export const getDecimalAdjust = (commission) => {
    return (Math.ceil(commission * 100) / 100).toFixed(2)
};

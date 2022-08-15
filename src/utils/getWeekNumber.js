export const getWeekNumber = (date) => {
  const currentDay = new Date(date);
  const firstDayOfYear = new Date(currentDay.getFullYear(), 0, 1);
  const days = Math.ceil((currentDay- firstDayOfYear) / (24 * 60 * 60 * 1000) - 1);
  return Math.ceil((days + firstDayOfYear.getDay()) / 7);
}

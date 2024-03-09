export const formatNumber = (digit: number) => {
  return new Intl.NumberFormat("en-us").format(digit);
};

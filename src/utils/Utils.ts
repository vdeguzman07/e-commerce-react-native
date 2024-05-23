/* eslint-disable prettier/prettier */
/* eslint-disable radix */

export const formatCurrency = (value: string): string => {
  let result = parseInt(value);
  return result.toLocaleString('en-US');
};

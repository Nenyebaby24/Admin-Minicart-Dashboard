/**
 * Formats a number as a currency string
 * @param {number} amount - The number to format
 * @param {string} currency - The currency code (default: USD)
 */
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats large numbers with commas but no currency symbol
 * Example: 12847 -> 12,847
 */
export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(number);
};
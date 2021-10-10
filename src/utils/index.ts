/**
 * Number formatting utility.
 * @param number Number to format
 * @param locale Target locale (en, tr, etc.)
 * @returns Formatted number as string
 */
export const formatNumber = (number: number, locale = "en") => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
  }).format(number);
};

/**
 * Format a phone number to a human-friendly string.
 *
 * - Strips all non-digit characters.
 * - Supports leading + for international numbers.
 * - Formats Czech numbers (+420 / 420 / 0xxxxxxxxx) to +420 xxx xxx xxx.
 * - Falls back to grouping digits in blocks of 3 from the start.
 */
export const formatPhoneNum = (input: string | number): string => {
  const raw = String(input ?? '');
  const hasPlus = raw.trim().startsWith('+');
  const digits = raw.replace(/\D+/g, '');

  if (!digits) return '';

  // Czech numbers normalization
  const withoutLeadingZero = digits.replace(/^0/, '');
  const isCz = digits.startsWith('420') || withoutLeadingZero.length === 9;
  if (isCz) {
    const core = digits.startsWith('420')
      ? digits.slice(3)
      : withoutLeadingZero.slice(-9);
    const grouped = core.match(/.{1,3}/g)?.join(' ') ?? core;
    return `+420 ${grouped}`;
  }

  // Generic international formatting: keep plus if present, group in 3s
  const grouped = digits.match(/.{1,3}/g)?.join(' ') ?? digits;
  return `${hasPlus ? '+' : ''}${grouped}`;
};

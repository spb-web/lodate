import type { FormatRelative } from './locale/types';
/**
 * Localized relative date/time formatting (both for past and future dates).
 *
 * @category Formatter
 *
 * @example
 * ```
 * const createdAt = new Date(2021, 0, 1)
 *
 * fromAgo(createdAt); // 20 day(s) ago;
 * ```
 *
 * @param payload
 * @return { string }
 */
export default function relative(payload: string | number | Date | undefined, options: {
    formatter?: FormatRelative;
}): string;

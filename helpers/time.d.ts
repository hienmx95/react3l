import { Moment } from 'moment';
/**
 * Get standard date-time string
 *
 * @param m Moment
 *
 * @return string
 */
export declare function standardDateTime(m: Moment | Date | string): string;
export declare function standardLocalDateTime(m: Moment | Date | string): string;
/**
 * Count time between from and to
 *
 * @param from Date
 *
 * @param to Date
 *
 * @return string
 */
export declare function countTime(from: Date, to: Date): string;
/**
 * Format date time
 *
 * @param value Moment | Date | string | null
 * @param format string
 */
export declare function formatDate(value: Moment | Date | string | null, format?: string): string;
declare const _default: {
    standardDateTime: typeof standardDateTime;
    standardLocalDateTime: typeof standardLocalDateTime;
    countTime: typeof countTime;
    formatDate: typeof formatDate;
};
export default _default;

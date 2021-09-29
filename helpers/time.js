import { STANDARD_DATE_TIME_FORMAT, STANDARD_TIME_FORMAT } from '@react3l/react3l/config/consts';
import moment from 'moment';
/**
 * Get standard date-time string
 *
 * @param m Moment
 *
 * @return string
 */
export function standardDateTime(m) {
    return moment(m)
        .utcOffset(0)
        .format(STANDARD_DATE_TIME_FORMAT);
}
export function standardLocalDateTime(m) {
    return moment(m)
        .format(STANDARD_DATE_TIME_FORMAT);
}
/**
 * Count time between from and to
 *
 * @param from Date
 *
 * @param to Date
 *
 * @return string
 */
export function countTime(from, to) {
    var time = Math.abs(to.getTime() - from.getTime());
    return moment(time).utcOffset(0).format(STANDARD_TIME_FORMAT);
}
/**
 * Format date time
 *
 * @param value Moment | Date | string | null
 * @param format string
 */
export function formatDate(value, format) {
    if (format === void 0) { format = STANDARD_DATE_TIME_FORMAT; }
    if (value === null) {
        return '';
    }
    if (typeof value === 'string' || value instanceof Date) {
        return moment(value).format(format);
    }
    return value.format(format);
}
export default {
    standardDateTime: standardDateTime,
    standardLocalDateTime: standardLocalDateTime,
    countTime: countTime,
    formatDate: formatDate,
};
//# sourceMappingURL=time.js.map
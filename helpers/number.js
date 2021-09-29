/**
 * Format a number with thousand-separator
 *
 * @param {number} x
 * @return {string}
 */
import { TypeChecking } from '@react3l/react3l/helpers/type-checking';
export function numberWithCommas(x) {
    if (TypeChecking.isNumber(x)) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return '';
}
/**
 * Check if a value is a valid number
 *
 * @param value
 * @return {boolean}
 */
export function isValidNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}
export default {
    numberWithCommas: numberWithCommas,
    isValidNumber: isValidNumber,
};
//# sourceMappingURL=number.js.map
/**
 * Type checking helper
 */
var TypeChecking = /** @class */ (function () {
    function TypeChecking() {
    }
    /**
     * Check if a value is a number
     *
     * @param {number} value
     * @return {boolean}
     */
    TypeChecking.isNumber = function (value) {
        return typeof value === 'number';
    };
    /**
     * Check if a variable is a function
     *
     * @param {(...params: any[]) => any} fn
     * @return {boolean}
     */
    TypeChecking.isFunction = function (fn) {
        return typeof fn === 'function';
    };
    /**
     * Check if a value is a string
     *
     * @param {string} value
     * @return {boolean}
     */
    TypeChecking.isString = function (value) {
        return typeof value === 'string';
    };
    /**
     * Check if a value is an object
     *
     * @param {object} value
     * @return {boolean}
     */
    TypeChecking.isObject = function (value) {
        return typeof value === 'object' && value !== null;
    };
    /**
     * Check if a value is an array
     *
     * @param {any[]} value
     * @return {boolean}
     */
    TypeChecking.isArray = function (value) {
        return typeof value === 'object' && value instanceof Array;
    };
    return TypeChecking;
}());
export { TypeChecking };
//# sourceMappingURL=type-checking.js.map
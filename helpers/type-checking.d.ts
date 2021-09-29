/**
 * Type checking helper
 */
export declare class TypeChecking {
    /**
     * Check if a value is a number
     *
     * @param {number} value
     * @return {boolean}
     */
    static isNumber(value?: number): boolean;
    /**
     * Check if a variable is a function
     *
     * @param {(...params: any[]) => any} fn
     * @return {boolean}
     */
    static isFunction(fn?: (...params: any[]) => any): boolean;
    /**
     * Check if a value is a string
     *
     * @param {string} value
     * @return {boolean}
     */
    static isString(value?: string): boolean;
    /**
     * Check if a value is an object
     *
     * @param {object} value
     * @return {boolean}
     */
    static isObject(value?: object): boolean;
    /**
     * Check if a value is an array
     *
     * @param {any[]} value
     * @return {boolean}
     */
    static isArray(value?: any[]): boolean;
}

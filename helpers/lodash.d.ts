/**
 * Limit the number of times a function will be called in an amount of time
 *
 * @param {T} fn
 * @param {number} time
 * @return {T}
 */
export declare function debounce(fn: (...params: any[]) => any, time?: number): (...params: any[]) => any;
export { default as kebabCase } from 'lodash/kebabCase';
export { default as camelCase } from 'lodash/camelCase';
export { default as snakeCase } from 'lodash/snakeCase';

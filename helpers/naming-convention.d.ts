export declare type NamingConvention = 'snakeCase' | 'camelCase' | 'kebabCase';
/**
 * Naming convention transformer
 */
export declare type TransformFunction = (key: string) => string;
/**
 * Transform key convention of an object and all of its properties
 *
 * @param data
 * @param {NamingConvention} functionName
 * @return {any}
 */
export declare function transformKeys(data: any, functionName?: NamingConvention): any;
declare const _default: {
    transformKeys: typeof transformKeys;
};
export default _default;

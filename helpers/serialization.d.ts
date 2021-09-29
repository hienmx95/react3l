/**
 * Serialize data to a serializable object
 *
 * @param {T} data
 * @return {T}
 */
export declare function serialize<T>(data: T): T;
/**
 * Deserialize data to a full-featured Javascript object
 *
 * @param {T} data
 * @return {T}
 */
export declare function deserialize<T>(data: T): T;
declare const _default: {
    serialize: typeof serialize;
    deserialize: typeof deserialize;
};
export default _default;

/**
 * This class provide some methods to handle JSON
 */
export declare class JSONHelper {
    /**
     * Sort keys of a JSON object
     *
     * @param {Record<string, any>} json
     * @return {Record<string, any>}
     */
    sort(json: Record<string, any>): Record<string, any>;
    /**
     * Un-flatten a JSON object
     *
     * @param {Record<string, any>} jsonTable
     * @return {Record<string, any>}
     */
    unflatten(jsonTable: Record<string, any>): Record<string, any>;
    /**
     * Flatten a JSON object
     *
     * @param {{[p: string]: any}} json
     * @param {string} parentKey
     * @return {{[p: string]: any} | Record<string, any>}
     */
    flatten(json: {
        [key: string]: any;
    }, parentKey?: string): Record<string, any>;
}
export declare const jsonHelper: JSONHelper;

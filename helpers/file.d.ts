/**
 * Convert base64 string to Data URL
 *
 * @param {string} base64
 * @param {string} mimeType
 * @return {string}
 */
export declare function base64ToDataURL(base64: string, mimeType?: string): string;
/**
 * Convert string to Uint8Array
 *
 * @param {string} str
 * @return {Uint8Array}
 */
export declare function stringToUint8Array(str: string): Uint8Array;
/**
 * Get filename from URI
 *
 * @param uri {string}
 * @return {string}
 */
export declare function getFileName(uri: string): string;
/**
 * Get file extension
 *
 * @param path {string}
 * @return {string}
 */
export declare function getExtension(path: string): string;
/**
 * Get image mime type from extension
 *
 * @param extension {string}
 * @return {string}
 */
export declare function getImageMimeType(extension: string): string;
declare const _default: {
    base64ToDataURL: typeof base64ToDataURL;
    stringToUint8Array: typeof stringToUint8Array;
};
export default _default;

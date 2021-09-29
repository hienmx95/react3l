import { IMAGE_JPEG, IMAGE_PNG, IMAGE_GIF } from '@react3l/react3l/config';
/**
 * Convert base64 string to Data URL
 *
 * @param {string} base64
 * @param {string} mimeType
 * @return {string}
 */
export function base64ToDataURL(base64, mimeType) {
    if (mimeType === void 0) { mimeType = IMAGE_JPEG; }
    return "data:" + mimeType + ";base64," + base64;
}
/**
 * Convert string to Uint8Array
 *
 * @param {string} str
 * @return {Uint8Array}
 */
export function stringToUint8Array(str) {
    var length = str.length;
    var array = new Uint8Array(new ArrayBuffer(length));
    for (var i = 0; i < length; i++)
        array[i] = str.charCodeAt(i);
    return array;
}
/**
 * Get filename from URI
 *
 * @param uri {string}
 * @return {string}
 */
export function getFileName(uri) {
    return uri.split('/').splice(-1)[0];
}
/**
 * Get file extension
 *
 * @param path {string}
 * @return {string}
 */
export function getExtension(path) {
    return path.replace(/^(.*)\.([^.]+)$/, '$2').toLowerCase();
}
/**
 * Get image mime type from extension
 *
 * @param extension {string}
 * @return {string}
 */
export function getImageMimeType(extension) {
    switch (extension) {
        case 'jpg':
        case 'jpeg':
            return IMAGE_JPEG;
        case 'gif':
            return IMAGE_GIF;
        case 'png':
            return IMAGE_PNG;
        default:
            return 'application/octet-stream';
    }
}
export default {
    base64ToDataURL: base64ToDataURL,
    stringToUint8Array: stringToUint8Array,
};
//# sourceMappingURL=file.js.map
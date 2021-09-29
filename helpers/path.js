import path from 'path';
/**
 * Concat HTTP URL
 *
 * @param baseURL
 * @param urls
 */
export function url(baseURL) {
    var urls = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        urls[_i - 1] = arguments[_i];
    }
    return baseURL + "/" + path.join.apply(path, urls);
}
export default {
    url: url,
};
//# sourceMappingURL=path.js.map
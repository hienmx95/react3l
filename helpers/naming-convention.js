import snakeCase from 'lodash/snakeCase';
import camelCase from 'lodash/camelCase';
import { kebabCase } from '@react3l/react3l/helpers/lodash';
/**
 * Transform key convention of an object and all of its properties
 *
 * @param data
 * @param {NamingConvention} functionName
 * @return {any}
 */
export function transformKeys(data, functionName) {
    if (functionName === void 0) { functionName = 'snakeCase'; }
    var transform = functionName === 'snakeCase'
        ? snakeCase
        : functionName === 'kebabCase'
            ? kebabCase
            : camelCase;
    if (typeof data === 'object' && data !== null) {
        if (data instanceof Array) {
            return data === null || data === void 0 ? void 0 : data.map(function (content) { return transformKeys(content); });
        }
        return Object.fromEntries(Object
            .entries(data)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return [
                transform(key),
                value,
            ];
        }));
    }
    return data;
}
export default {
    transformKeys: transformKeys,
};
//# sourceMappingURL=naming-convention.js.map
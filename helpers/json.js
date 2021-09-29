var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { TypeChecking } from '@react3l/react3l/helpers/type-checking';
/**
 * This class provide some methods to handle JSON
 */
var JSONHelper = /** @class */ (function () {
    function JSONHelper() {
    }
    /**
     * Sort keys of a JSON object
     *
     * @param {Record<string, any>} json
     * @return {Record<string, any>}
     */
    JSONHelper.prototype.sort = function (json) {
        var _this = this;
        var result = {};
        if (TypeChecking.isObject(json)) {
            Object
                .keys(json)
                .sort()
                .forEach(function (key) {
                result[key] = json[key];
                if (TypeChecking.isObject(result[key])) {
                    result[key] = _this.sort(result[key]);
                }
            });
        }
        return result;
    };
    /**
     * Un-flatten a JSON object
     *
     * @param {Record<string, any>} jsonTable
     * @return {Record<string, any>}
     */
    JSONHelper.prototype.unflatten = function (jsonTable) {
        if (jsonTable) {
            var result_1 = {};
            Object
                .keys(jsonTable)
                .forEach(function (key) {
                var namespaces = key.split('.');
                var lastIndex = namespaces.length - 1;
                var current = result_1;
                namespaces.forEach(function (namespace, index) {
                    if (!current.hasOwnProperty(namespace)) {
                        current[namespace] = (index === lastIndex) ? jsonTable[key] : {};
                    }
                    if (typeof current[namespace] === 'object') {
                        current = current[namespace];
                    }
                });
            });
            return this.sort(result_1);
        }
        return jsonTable;
    };
    /**
     * Flatten a JSON object
     *
     * @param {{[p: string]: any}} json
     * @param {string} parentKey
     * @return {{[p: string]: any} | Record<string, any>}
     */
    JSONHelper.prototype.flatten = function (json, parentKey) {
        var _this = this;
        if (parentKey === void 0) { parentKey = ''; }
        if (TypeChecking.isObject(json)) {
            var result_2 = {};
            Object
                .keys(json)
                .forEach(function (key) {
                var combinedKey = parentKey ? parentKey + "." + key : key;
                if (TypeChecking.isObject(json[key])) {
                    result_2[combinedKey] = json[key];
                }
                else {
                    result_2 = __assign(__assign({}, result_2), _this.flatten(json[key], combinedKey));
                }
            });
            return this.sort(result_2);
        }
        return json;
    };
    return JSONHelper;
}());
export { JSONHelper };
export var jsonHelper = new JSONHelper();
//# sourceMappingURL=json.js.map
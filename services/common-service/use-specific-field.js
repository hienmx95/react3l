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
import React from 'react';
export function useSpecificField(model, setModel, field) {
    return [
        React.useCallback(function (value) {
            var _a;
            return setModel(__assign(__assign({}, model), (_a = {}, _a[field] = value, _a)));
        }, [model, setModel, field]),
        React.useCallback(function (value) {
            var _a;
            var _b;
            return setModel(__assign(__assign({}, model), (_a = {}, _a[field] = value, _a[field + "Id"] = (_b = value) === null || _b === void 0 ? void 0 : _b.id, _a)));
        }, [model, setModel, field]),
    ];
}
//# sourceMappingURL=use-specific-field.js.map
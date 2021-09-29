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
/**
 * Higher order function (HOF) change handler
 *
 * @param state
 * @param setState
 */
export function useHOFChangeHandlers(state, setState) {
    var handleChangeSimpleField = React.useCallback(function (field) { return function (value) {
        var _a;
        return setState(__assign(__assign({}, state), (_a = {}, _a[field] = value, _a)));
    }; }, [setState, state]);
    var handleChangeRelationField = React.useCallback(function (field) { return function (value) {
        var _a;
        return setState(__assign(__assign({}, state), (_a = {}, _a[field] = value, _a[field + "Id"] = value === null || value === void 0 ? void 0 : value.id, _a)));
    }; }, [setState, state]);
    return [
        handleChangeSimpleField,
        handleChangeRelationField,
    ];
}
//# sourceMappingURL=use-hof-change-handlers.js.map
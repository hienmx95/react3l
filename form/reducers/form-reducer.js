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
import { Model } from '@react3l/react3l/core';
import { FormActionType } from '@react3l/react3l/form/types/form-action-type';
export function formReducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h;
    switch (action.type) {
        case FormActionType.focus:
            return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), (_a = {}, _a[action.fieldName] = true, _a)) });
        case FormActionType.simpleChange:
            return __assign(__assign({}, state), { values: __assign(__assign({}, state.values), (_b = {}, _b[action.fieldName] = action.fieldValue, _b)), touched: __assign(__assign({}, state.touched), (_c = {}, _c[action.fieldName] = true, _c)), dirty: __assign(__assign({}, state.dirty), (_d = {}, _d[action.fieldName] = true, _d)) });
        case FormActionType.objectChange:
            return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), (_e = {}, _e[action.fieldName] = true, _e[Model.getIdFieldName(action.fieldName)] = true, _e)), dirty: __assign(__assign({}, state.dirty), (_f = {}, _f[action.fieldName] = true, _f[Model.getIdFieldName(action.fieldName)] = true, _f)), values: __assign(__assign({}, state.values), (_g = {}, _g[action.fieldName] = action.fieldValue, _g[Model.getIdFieldName(action.fieldName)] = (_h = action.fieldValue) === null || _h === void 0 ? void 0 : _h.id, _g)) });
        case FormActionType.replace:
            return {
                values: action.values,
                touched: {},
                dirty: {},
            };
        default:
            return state;
    }
}
//# sourceMappingURL=form-reducer.js.map
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
export function listStateReducer(state, action) {
    switch (action.type) {
        case 'add-item':
            return __spreadArrays(state, [
                action.item,
            ]);
        case 'remove-item':
            state.splice(action.index, 1);
            return __spreadArrays(state);
        case 'set-value':
            return action.data;
        case 'concat':
            return __spreadArrays(state, action.data);
        case 'reset':
            return [];
        default:
            return state;
    }
}
export function useListState() {
    return React.useReducer(listStateReducer, []);
}
//# sourceMappingURL=use-list-state.js.map
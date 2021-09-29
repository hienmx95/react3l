import React from 'react';
/**
 * Boolean Reducer
 *
 * @param state {boolean}
 * @param action {BooleanAction}
 */
function booleanReducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return !state;
        case 'turn-on':
            return true;
        case 'turn-off':
            return false;
        default:
            return state;
    }
}
export function useBooleanState(initialState, callback, onTrue, onFalse) {
    if (initialState === void 0) { initialState = false; }
    var _a = React.useReducer(booleanReducer, initialState), state = _a[0], dispatch = _a[1];
    var handleToggleState = React.useCallback(function () {
        dispatch({
            type: 'toggle',
        });
        if (typeof callback === 'function') {
            callback();
        }
    }, [callback]);
    var handleSetTrue = React.useCallback(function () {
        dispatch({
            type: 'turn-on',
        });
        if (typeof callback === 'function') {
            callback();
        }
        if (typeof onTrue === 'function') {
            onTrue();
        }
    }, [callback, onTrue]);
    var handleSetFalse = React.useCallback(function () {
        dispatch({
            type: 'turn-off',
        });
        if (typeof callback === 'function') {
            callback();
        }
        if (typeof onFalse === 'function') {
            onFalse();
        }
    }, [callback, onFalse]);
    return [
        state,
        handleToggleState,
        handleSetTrue,
        handleSetFalse,
    ];
}
//# sourceMappingURL=use-boolean-state.js.map
import React from 'react';
function numberReducer(state, action) {
    switch (action.type) {
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        case 'clear':
            return null;
        case 'set-value':
            return action.newValue;
        case 'reset':
            return 0;
        default:
            return state;
    }
}
export function useNumberState(initialState) {
    if (initialState === void 0) { initialState = 0; }
    return React.useReducer(numberReducer, initialState);
}
//# sourceMappingURL=use-number-state.js.map
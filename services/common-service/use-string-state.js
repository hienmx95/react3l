import React from 'react';
export function stringStateReducer(state, action) {
    switch (action.type) {
        case 'input':
            return action.value;
        case 'clear':
            return '';
        default:
            return state;
    }
}
export function useStringState(initialState) {
    return React.useReducer(stringStateReducer, initialState);
}
//# sourceMappingURL=use-string-state.js.map
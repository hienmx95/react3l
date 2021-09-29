export interface BooleanAction {
    type: 'toggle' | 'turn-on' | 'turn-off';
}
export declare function useBooleanState(initialState?: boolean, callback?: () => any, onTrue?: () => any, onFalse?: () => any): [boolean, () => void, () => void, () => void];

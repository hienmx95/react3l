import { Dispatch } from 'react';
export interface NumberAction {
    type: 'increase' | 'decrease' | 'clear' | 'reset' | 'set-value';
    newValue?: number;
}
export declare function useNumberState(initialState?: number): [number, Dispatch<NumberAction>];

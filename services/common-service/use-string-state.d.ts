import { Dispatch } from 'react';
export interface StringStateAction {
    type: 'clear' | 'input';
    value?: string;
}
export declare function stringStateReducer(state: string, action: StringStateAction): string;
export declare function useStringState(initialState: string): [string, Dispatch<StringStateAction>];

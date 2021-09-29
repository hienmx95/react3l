import { Dispatch } from 'react';
export interface ListStateAction<T> {
    type: 'reset' | 'add-item' | 'remove-item' | 'concat' | 'set-value';
    item?: T;
    index?: number;
    data?: T[];
}
export declare function listStateReducer<T>(state: T[], action: ListStateAction<T>): T[];
export declare function useListState<T>(): [T[], Dispatch<ListStateAction<T>>];

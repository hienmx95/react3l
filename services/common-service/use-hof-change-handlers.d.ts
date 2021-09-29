import { Dispatch, SetStateAction } from 'react';
/**
 * Higher order function (HOF) change handler
 *
 * @param state
 * @param setState
 */
export declare function useHOFChangeHandlers<T extends Record<string, any>>(state: T, setState: Dispatch<SetStateAction<T>>): [<P extends keyof T>(field: P) => (value: T[P]) => Promise<void> | void, <P extends keyof T>(field: P) => (value: T[P]) => Promise<void> | void];

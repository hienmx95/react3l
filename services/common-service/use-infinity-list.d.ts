import { Model, ModelFilter } from '@react3l/react3l/core';
import { Dispatch } from 'react';
import { Observable } from 'rxjs';
export declare type List<T> = Record<number, T[]>;
export interface ListData<T extends Model, TFilter extends ModelFilter> {
    refreshing: boolean;
    loading: boolean;
    filter: TFilter;
    list: List<T>;
    total: number;
}
export interface ListAction<T extends Model, TFilter extends ModelFilter, P extends keyof TFilter> {
    type: string;
    list?: T[];
    searchField?: P;
    searchType?: keyof TFilter[P];
    searchValue?: string;
    total?: number;
    newFilter?: TFilter;
}
export declare const ACTION_SET_LIST: string;
export declare const ACTION_SEARCH_LIST: string;
export declare const ACTION_REFRESH_LIST: string;
export declare const ACTION_RESET_FILTER: string;
export declare const ACTION_LOAD_MORE_ITEMS: string;
export declare const ACTION_TURN_OFF_LOADING: string;
/**
 * Infinity list reducer
 *
 * @param state
 * @param action
 */
export declare function listReducer<T extends Model, TFilter extends ModelFilter, P extends keyof TFilter>(state: ListData<T, TFilter>, action: ListAction<T, TFilter, P>): ListData<T, TFilter>;
export declare function useInfinityList<T extends Model, TFilter extends ModelFilter, P extends keyof TFilter = any>(FilterClass: new () => TFilter, getList: (filter: TFilter) => Observable<T[]>, getCount: (filter: TFilter) => Observable<number>, searchField: P, searchType?: keyof TFilter[P]): [T[], number, boolean, boolean, TFilter, () => void, () => void, (searchValue: string) => void, Dispatch<ListAction<T, TFilter, P>>, boolean];

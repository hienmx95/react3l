var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { DEFAULT_TAKE } from '@react3l/react3l/config';
import React from 'react';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
export var ACTION_SET_LIST = 'ACTION_SET_LIST';
export var ACTION_SEARCH_LIST = 'ACTION_SEARCH_LIST';
export var ACTION_REFRESH_LIST = 'ACTION_REFRESH_LIST';
export var ACTION_RESET_FILTER = 'ACTION_RESET_FILTER';
export var ACTION_LOAD_MORE_ITEMS = 'ACTION_LOAD_MORE_ITEMS';
export var ACTION_TURN_OFF_LOADING = 'ACTION_TURN_OFF_LOADING';
/**
 * Infinity list reducer
 *
 * @param state
 * @param action
 */
export function listReducer(state, action) {
    var _a, _b, _c;
    switch (action.type) {
        case ACTION_REFRESH_LIST:
            return __assign(__assign({}, state), { list: {}, filter: __assign(__assign({}, state.filter), { skip: 0, take: DEFAULT_TAKE }), loading: false, refreshing: true });
        case ACTION_RESET_FILTER:
            return __assign(__assign({}, state), { filter: action.newFilter, list: {}, total: 0, loading: true, refreshing: false });
        case ACTION_SEARCH_LIST:
            var isStringField = typeof action.searchType === 'undefined';
            var isEmptyString = action.searchValue === '';
            return __assign(__assign({}, state), { list: {}, filter: __assign(__assign({}, state.filter), (_a = {}, _a[action.searchField] = !isEmptyString
                    ? isStringField
                        ? action.searchValue
                        : (_b = {},
                            _b[action.searchType] = action.searchValue,
                            _b)
                    : isStringField
                        ? null
                        : {}, _a.skip = 0, _a.take = DEFAULT_TAKE, _a)), loading: true, refreshing: true });
        case ACTION_LOAD_MORE_ITEMS:
            return __assign(__assign({}, state), { filter: __assign(__assign({}, state.filter), { skip: state.filter.skip + DEFAULT_TAKE, take: DEFAULT_TAKE }), loading: true, refreshing: false });
        case ACTION_SET_LIST:
            return __assign(__assign({}, state), { list: __assign(__assign({}, state.list), (_c = {}, _c[state.filter.skip] = action.list, _c)), total: action.total });
        case ACTION_TURN_OFF_LOADING:
            return __assign(__assign({}, state), { loading: false, refreshing: false });
        default:
            return state;
    }
}
export function useInfinityList(FilterClass, getList, getCount, searchField, searchType) {
    var _a = React.useReducer(listReducer, {
        list: {},
        filter: new FilterClass(),
        loading: true,
        refreshing: true,
        total: 0,
    }), _b = _a[0], 
    // Loaded items
    list = _b.list, 
    // Loading state
    loading = _b.loading, 
    // Refreshing state
    refreshing = _b.refreshing, 
    // Filter object
    filter = _b.filter, 
    // Total filtered items
    total = _b.total, dispatch = _a[1];
    var arrayList = React.useMemo(function () {
        return [].concat.apply([], Object.values(list));
    }, [list]);
    var handleLoadList = React.useCallback(function () {
        return (forkJoin([getList(filter), getCount(filter)])
            // Pipe loading
            .pipe(finalize(function () {
            dispatch({
                type: ACTION_TURN_OFF_LOADING,
            });
        })));
    }, [filter, getCount, getList]);
    React.useEffect(function () {
        var subscription = handleLoadList()
            // Subscription
            .pipe(finalize(function () {
            dispatch({
                type: ACTION_TURN_OFF_LOADING,
            });
        }))
            .subscribe(function (_a) {
            var list = _a[0], total = _a[1];
            dispatch({
                type: ACTION_SET_LIST,
                list: list,
                total: total,
            });
        });
        return function cleanup() {
            subscription.unsubscribe();
        };
    }, [handleLoadList]);
    var handleRefresh = React.useCallback(function () {
        dispatch({
            type: ACTION_REFRESH_LIST,
        });
    }, []);
    var handleLoadMore = React.useCallback(function () {
        if (arrayList.length < total &&
            arrayList.length >= DEFAULT_TAKE &&
            total > 0 &&
            !loading) {
            dispatch({
                type: ACTION_LOAD_MORE_ITEMS,
            });
        }
    }, [arrayList.length, loading, total]);
    var handleSearch = React.useCallback(function (searchValue) {
        dispatch({
            type: ACTION_SEARCH_LIST,
            searchValue: searchValue,
            searchType: searchType,
            searchField: searchField,
        });
    }, [searchField, searchType]);
    return [
        arrayList,
        total,
        loading,
        refreshing,
        filter,
        handleLoadMore,
        handleRefresh,
        handleSearch,
        dispatch,
        refreshing,
    ];
}
//# sourceMappingURL=use-infinity-list.js.map
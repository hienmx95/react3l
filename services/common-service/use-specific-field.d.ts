import { Model } from '@react3l/react3l/core/model';
import { Dispatch, SetStateAction } from 'react';
export declare function useSpecificField<T extends Model, P extends keyof T>(model: T, setModel: Dispatch<SetStateAction<T>>, field: P): [(value: T[P]) => void | Promise<void>, (value: T[P]) => void | Promise<void>];

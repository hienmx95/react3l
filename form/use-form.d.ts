import { Model } from '@react3l/react3l/core';
import { ObjectSchema } from 'yup';
import { FormResponse } from '@react3l/react3l/form/types/form-response';
export declare type HigherOrderFocusFunction<T extends Model> = (fieldName: keyof T) => () => void;
export declare type HigherOrderBlurFunction<T extends Model> = (fieldName: keyof T) => () => void;
export declare type HigherOrderObjectChangeHandler<T extends Model> = <P extends keyof T>(fieldName: P) => (fieldValue: T[P]) => void;
export declare function useForm<T extends Model>(ModelClass: new () => T, initialValue?: T, validationSchema?: ObjectSchema<T>): FormResponse<T>;

import { Model } from '@react3l/react3l/core';
import { FormAction } from '@react3l/react3l/form/types/form-action';
import { FormState } from '@react3l/react3l/form/types/form-state';
export declare function formReducer<T extends Model>(state: FormState<T>, action: FormAction<T>): FormState<T>;

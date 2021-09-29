import { Model } from '@react3l/react3l/core';
import { FormState } from '@react3l/react3l/form/types/form-state';
export declare function validate<T extends Model>(form: FormState<T>): Promise<T>;

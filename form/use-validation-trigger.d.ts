import { Model } from '@react3l/react3l/core';
import { FormState } from '@react3l/react3l/form/types/form-state';
import { FormValidationErrors } from '@react3l/react3l/form/types/form-validation-errors';
/**
 * Validate a form
 *
 * @template T
 * @param form {T}
 * @throws {FormValidationErrors<T>}
 */
export declare function useValidationTrigger<T extends Model>(form: FormState<T>): [FormValidationErrors<T>];

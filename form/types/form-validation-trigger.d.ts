import { Model } from '@react3l/react3l/core';
/**
 * @template T
 *
 * @return {Promise<T | void>}
 *
 * @throws {FormValidationErrors<T>}
 */
export declare type FormValidationTrigger<T extends Model> = () => Promise<T | void>;

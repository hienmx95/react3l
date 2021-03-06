import { Model } from '@react3l/react3l/core/model';
/**
 * ErrorMap for Model
 *
 * @param T {Model}
 */
export declare type ErrorMap<T extends Model> = Record<Exclude<keyof T, 'errors'>, string>;

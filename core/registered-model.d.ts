import { Model } from '@react3l/react3l/core/model';
import 'reflect-metadata';
/**
 * Add a model to a registered list
 *
 * @param name {string}
 *
 * @constructor
 */
export declare function RegisteredModel<T extends Model>(name?: string): (ModelClass: typeof Model) => typeof Model;
/**
 * Get a model by name
 *
 * @param name {string}
 *
 * @return {Model}
 */
export declare function getModel(name: string): Model;
/**
 * Get all registered models
 *
 * @return {Record<string, Model>}
 */
export declare function getAllModels(): Record<string, Model>;

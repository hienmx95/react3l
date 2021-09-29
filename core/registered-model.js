import { Model } from '@react3l/react3l/core/model';
import 'reflect-metadata';
/**
 * Store all registered models
 *
 * @type {Record<string, Model>}
 */
var registeredModels = {};
/**
 * Add a model to a registered list
 *
 * @param name {string}
 *
 * @constructor
 */
export function RegisteredModel(name) {
    return function (ModelClass) {
        if (ModelClass.prototype instanceof Model) {
            var modelName = name !== null && name !== void 0 ? name : ModelClass.name;
            registeredModels[modelName] = ModelClass;
            return ModelClass;
        }
        throw new Error("Class " + ModelClass.name + " does not extend the base Model class");
    };
}
/**
 * Get a model by name
 *
 * @param name {string}
 *
 * @return {Model}
 */
export function getModel(name) {
    return registeredModels[name];
}
/**
 * Get all registered models
 *
 * @return {Record<string, Model>}
 */
export function getAllModels() {
    return registeredModels;
}
//# sourceMappingURL=registered-model.js.map
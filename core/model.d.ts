import { Cloneable } from '@react3l/react3l/core/cloneable';
import { ErrorMap } from '@react3l/react3l/core/error-map';
/**
 * App model
 * - Each model should represent a table in database
 * - Models can be auto-generated by using CodeGenerator
 *
 * @package "react3l"
 * @author "thanhtunguet <ht@thanhtunguet.info>"
 * @module "react3l/core"
 * @class {Model}
 */
export declare class Model extends Cloneable {
    /**
     * Backend validation errors
     *
     * @type {ErrorMap<self>}
     */
    errors?: ErrorMap<this>;
    /**
     * React key
     *
     * @type {string | number}
     */
    key?: string | number;
    /**
     * Get relationship ID field name
     * @param fieldName {string}
     * @return {string}
     */
    static getIdFieldName<T extends Model>(fieldName: keyof T): keyof T;
    /**
     * Model fields
     *
     * @type {any}
     */
    [key: string]: any;
}

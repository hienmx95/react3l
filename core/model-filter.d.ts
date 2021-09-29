import { Cloneable } from '@react3l/react3l/core/cloneable';
import { Model } from '@react3l/react3l/core/model';
import { OrderType } from '@react3l/react3l/core/order-type';
/**
 * App model filter
 * - Each Model should have and only have one ModelFilter
 * - ModelFilters can be auto-generated by using CodeGenerator
 *
 * @package "react3l"
 * @author "thanhtunguet <ht@thanhtunguet.info>"
 * @module "react3l/core"
 * @class {ModelFilter}
 */
export declare class ModelFilter<T extends Model = any> extends Cloneable {
    /**
     * Skip number
     *
     * @type {number}
     */
    skip: number;
    /**
     * Take number
     *
     * @type {number}
     */
    take: number;
    /**
     * Field name to order by
     *
     * @type {string}
     */
    orderBy?: keyof T | string;
    /**
     * Order type
     *
     * @type {OrderType}
     */
    orderType?: OrderType;
    /**
     * Filter fields
     */
    [key: string]: any;
}
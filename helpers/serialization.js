import moment from 'moment';
import { STANDARD_DATE_TIME_REGEX } from '@react3l/react3l/config/consts';
import { standardLocalDateTime } from '@react3l/react3l/helpers/time';
/**
 * Serialize data to a serializable object
 *
 * @param {T} data
 * @return {T}
 */
export function serialize(data) {
    if (typeof data === 'object' && data !== null) {
        /**
         * If data is a moment object
         */
        if (Object.prototype.hasOwnProperty.call(data, '_isAMomentObject')) {
            return standardLocalDateTime(data);
        }
        /**
         * If data is an array
         */
        if (data instanceof Array) {
            return data.map(function (dataContent) { return serialize(dataContent); });
        }
        /**
         * If data is just an object
         */
        return Object.fromEntries(Object
            .entries(data)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return [key, serialize(value)];
        }));
    }
    return data;
}
/**
 * Deserialize data to a full-featured Javascript object
 *
 * @param {T} data
 * @return {T}
 */
export function deserialize(data) {
    /**
     * If data is a date-time value
     */
    if (typeof data === 'string') {
        var matches = data.match(STANDARD_DATE_TIME_REGEX);
        if (matches) {
            return moment(typeof matches[4] === 'undefined' ? data + "+00:00" : data);
        }
    }
    if (typeof data === 'object' && data !== null) {
        /**
         * If data is an array
         */
        if (data instanceof Array) {
            return data.map(function (dataContent) { return deserialize(dataContent); });
        }
        /**
         * If data is just an object
         */
        // @ts-ignore
        return Object.fromEntries(Object
            .entries(data)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return [key, deserialize(value)];
        }));
    }
    return data;
}
export default {
    serialize: serialize,
    deserialize: deserialize,
};
//# sourceMappingURL=serialization.js.map
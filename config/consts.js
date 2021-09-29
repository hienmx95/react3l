import moment from 'moment';
/**
 * Current environment is production
 *
 * @type {boolean}
 */
export var IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
/**
 * Current environment is production
 *
 * @type {boolean}
 */
export var IS_PRODUCTION = process.env.NODE_ENV === 'production';
/**
 * Initial skip value for {ModelFilter}
 *
 * @type {number}
 */
export var INITIAL_SKIP = 0;
/**
 * Default take value for {ModelFilter}
 *
 * @type {number}
 */
export var DEFAULT_TAKE = 10;
/**
 * Standard date-time without timezone expression
 *
 * @type {RegExp}
 */
export var STANDARD_DATE_TIME_REGEX_WITHOUT_TIMEZONE = /^[0-9]{4}-[0-9]{2}-[0-9]{2}[\sT][0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?$/;
/**
 * Standard date-time expression
 *
 * @type {RegExp}
 */
export var STANDARD_DATE_TIME_REGEX = /^([0-9]{4}-[0-9]{2}-[0-9]{2})[\sT]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?)(Z|[+-][0-9]{2}:[0-9]{2})?$/;
/**
 * Standard date-time format
 *
 * @type {string}
 */
export var STANDARD_DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
/**
 * Standard date format
 *
 * @type {string}
 */
export var STANDARD_DATE_FORMAT = 'YYYY-MM-DD';
/**
 * Standard time format
 *
 * @type {string}
 */
export var STANDARD_TIME_FORMAT = 'HH:mm:ss';
/**
 * Timezone offset string
 *
 * @type {string}
 */
export var TIMEZONE_OFFSET = moment().format('Z');
/**
 * Debounce time 50ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_050 = 50;
/**
 * Debounce time 100ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_100 = 100;
/**
 * Debounce time 150ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_150 = 150;
/**
 * Debounce time 200ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_200 = 200;
/**
 * Debounce time 250ms
 * @type {number}
 */
export var DEBOUNCE_TIME_250 = 250;
/**
 * Debounce time 300ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_300 = 300;
/**
 * Debounce time 350ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_350 = 350;
/**
 * Debounce time 400ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_400 = 400;
/**
 * Debounce time 450ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_450 = 450;
/**
 * Debounce time 500ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_500 = 500;
/**
 * Debounce time 550ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_550 = 550;
/**
 * Debounce time 600ms
 *
 * @type {number}
 */
export var DEBOUNCE_TIME_600 = 600;
/**
 * JPEG Mime Type
 *
 * @type {string}
 */
export var IMAGE_JPEG = 'image/jpeg';
/**
 * PNG Mime Type
 *
 * @type {string}
 */
export var IMAGE_PNG = 'image/png';
/**
 * GIF Mime Type
 *
 * @type {string}
 */
export var IMAGE_GIF = 'image/gif';
//# sourceMappingURL=consts.js.map
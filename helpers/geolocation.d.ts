/**
 * Transform degree to radian
 *
 * @param {number} deg
 * @return {number}
 */
export declare function deg2rad(deg: number): number;
/**
 * Calculate distance between two points on GPS Map
 *
 * @param {number} lat1
 * @param {number} lon1
 * @param {number} lat2
 * @param {number} lon2
 * @return {number}
 */
export declare function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number;
declare const _default: {
    calculateDistance: typeof calculateDistance;
    deg2rad: typeof deg2rad;
};
export default _default;

/**
 * Transform degree to radian
 *
 * @param {number} deg
 * @return {number}
 */
export function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
/**
 * Calculate distance between two points on GPS Map
 *
 * @param {number} lat1
 * @param {number} lon1
 * @param {number} lat2
 * @param {number} lon2
 * @return {number}
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
export default {
    calculateDistance: calculateDistance,
    deg2rad: deg2rad,
};
//# sourceMappingURL=geolocation.js.map
/**
 * Extract a unique key from a model
 *
 * @param {T} model
 * @return {string}
 */
export function keyExtractor(model) {
    return "" + model.id;
}
export default {
    keyExtractor: keyExtractor,
};
//# sourceMappingURL=model.js.map
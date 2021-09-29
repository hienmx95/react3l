import { TypeChecking } from '@react3l/react3l/helpers/type-checking';
var Cloneable = /** @class */ (function () {
    function Cloneable() {
    }
    /**
     * Clone a model instance
     *
     * @param {Partial<T>} partial
     * @return {Model}
     */
    Cloneable.clone = function (partial) {
        var instance = new this();
        if (TypeChecking.isObject(partial)) {
            Object.assign(instance, partial);
        }
        return instance;
    };
    return Cloneable;
}());
export { Cloneable };
//# sourceMappingURL=cloneable.js.map
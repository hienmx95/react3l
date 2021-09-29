var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { DEFAULT_TAKE, INITIAL_SKIP } from '@react3l/react3l/config/consts';
import { Cloneable } from '@react3l/react3l/core/cloneable';
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
var ModelFilter = /** @class */ (function (_super) {
    __extends(ModelFilter, _super);
    function ModelFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Skip number
         *
         * @type {number}
         */
        _this.skip = INITIAL_SKIP;
        /**
         * Take number
         *
         * @type {number}
         */
        _this.take = DEFAULT_TAKE;
        return _this;
    }
    return ModelFilter;
}(Cloneable));
export { ModelFilter };
//# sourceMappingURL=model-filter.js.map
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
import { Repository } from '@react3l/react3l/core/repository';
import { map, retry } from 'rxjs/operators';
/**
 * Translation repository
 * Load translation resources via HTTP
 */
var TranslationRepository = /** @class */ (function (_super) {
    __extends(TranslationRepository, _super);
    function TranslationRepository(httpConfig) {
        if (httpConfig === void 0) { httpConfig = {}; }
        var _this = _super.call(this, httpConfig) || this;
        /**
         * HTTP Response Interceptor
         *
         * @param response {AxiosResponse}
         * @return {AxiosResponse | Promise<AxiosResponse>}
         */
        _this.responseInterceptor = function (response) { return response; };
        /**
         * Get language resource
         *
         * @param language {string}
         * @return {TranslationResource}
         */
        _this.get = function (language) {
            return _this.httpObservable.get(language + ".json")
                .pipe(retry(3), map(function (response) { return response.data; }))
                .toPromise();
        };
        TranslationRepository.instances.push(_this);
        _this.ejectInterceptor('both');
        return _this;
    }
    Object.defineProperty(TranslationRepository, "baseURL", {
        /**
         * Translation resource base URL getter
         */
        get: function () {
            if (this.instances.length > 0) {
                return this.instances[0].httpObservable.defaults.baseURL;
            }
            return null;
        },
        /**
         * Translation resource base URL setter
         */
        set: function (baseURL) {
            this.instances.forEach(function (instance) {
                instance.baseURL = baseURL;
            });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Repository instances
     *
     * @type instances {TranslationRepository[]}
     */
    TranslationRepository.instances = [];
    return TranslationRepository;
}(Repository));
export { TranslationRepository };
export var translationRepository = new TranslationRepository();
//# sourceMappingURL=translation-repository.js.map
import axios from 'axios';
import Axios from '@react3l/axios-observable';
/**
 * This class aims to include all data access method for only one business domain
 */
var Repository = /** @class */ (function () {
    /**
     * Construct a repository
     * @param httpConfig {AxiosRequestConfig}
     * @param baseURL {string}
     */
    function Repository(httpConfig, baseURL) {
        var _this = this;
        /**
         * Store current request interceptors
         * @protected
         */
        this.currentRequestInterceptors = {
            http: [],
            httpObservable: [],
        };
        /**
         * Store current response interceptors
         * @protected
         */
        this.currentResponseInterceptors = {
            http: [],
            httpObservable: [],
        };
        /**
         * Eject an interceptor
         * @param type {'request' | 'response' | 'both'}
         */
        this.ejectInterceptor = function (type) {
            switch (type) {
                case 'request':
                    _this.currentRequestInterceptors.http.forEach(function (id) {
                        _this.http.interceptors.request.eject(id);
                    });
                    _this.currentRequestInterceptors.httpObservable.forEach(function (id) {
                        _this.httpObservable.interceptors.request.eject(id);
                    });
                    break;
                case 'response':
                    _this.currentResponseInterceptors.http.forEach(function (id) {
                        _this.http.interceptors.response.eject(id);
                    });
                    _this.currentResponseInterceptors.httpObservable.forEach(function (id) {
                        _this.httpObservable.interceptors.response.eject(id);
                    });
                    break;
                case 'both':
                    _this.ejectInterceptor('request');
                    _this.ejectInterceptor('response');
                    break;
                default:
                    throw new Error('Param accept only request | response | both');
            }
        };
        this.http = axios.create(httpConfig);
        this.httpObservable = Axios.create(httpConfig);
        Repository.addRepository(this);
        // Add request interceptor into both instances
        if (typeof Repository.requestInterceptor === 'function') {
            this.currentRequestInterceptors = {
                http: [
                    this.http.interceptors.request.use(Repository.requestInterceptor),
                ],
                httpObservable: [
                    this.httpObservable.interceptors.request.use(Repository.requestInterceptor),
                ],
            };
        }
        // Add response and error interceptors into both instances
        if (typeof Repository.responseInterceptor === 'function') {
            this.currentResponseInterceptors = {
                http: [
                    this.http.interceptors.response.use(Repository.responseInterceptor, Repository.errorInterceptor),
                ],
                httpObservable: [
                    this.httpObservable.interceptors.response.use(Repository.responseInterceptor, Repository.errorInterceptor),
                ],
            };
        }
        // Set baseURL in constructor
        if (typeof baseURL === 'string') {
            this.baseURL = baseURL;
        }
    }
    Object.defineProperty(Repository.prototype, "baseURL", {
        /**
         * Set baseURL for both http instances of this repository
         *
         * @param baseURL {string}
         */
        set: function (baseURL) {
            this.http.defaults.baseURL = baseURL;
            this.httpObservable.defaults.baseURL = baseURL;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add a repository to static instance array
     *
     * @param repository {Repository}
     */
    Repository.addRepository = function (repository) {
        this.instances.push(repository);
    };
    /**
     * Get all repository instances
     *
     * @return {Repository[]}
     */
    Repository.getInstances = function () {
        return this.instances;
    };
    /**
     * Store all repository instances
     *
     * @protected
     * @type {Repository[]}
     */
    Repository.instances = [];
    return Repository;
}());
export { Repository };
//# sourceMappingURL=repository.js.map
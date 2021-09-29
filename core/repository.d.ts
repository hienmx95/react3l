import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from '@react3l/axios-observable';
export interface RepositoryInterceptors {
    http: number[];
    httpObservable: number[];
}
/**
 * This class aims to include all data access method for only one business domain
 */
export declare class Repository {
    /**
     * Interceptor to handle API Request
     *
     * @param config {AxiosRequestConfig}
     * @return {AxiosRequestConfig | Promise<AxiosRequestConfig>}
     */
    static requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
    /**
     * Interceptor to handle API Response
     *
     * @param response {AxiosResponse}
     * @return {AxiosResponse | Promise<AxiosResponse>}
     */
    static responseInterceptor: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
    /**
     * Interceptor to handle API Call errors
     *
     * @param error {AxiosError}
     * @throws {AxiosError}
     * @return {void | Promise<void>}
     */
    static errorInterceptor: (error: AxiosError) => any | Promise<any>;
    /**
     * Store all repository instances
     *
     * @protected
     * @type {Repository[]}
     */
    protected static instances: Repository[];
    /**
     * Store current request interceptors
     * @protected
     */
    protected currentRequestInterceptors: RepositoryInterceptors;
    /**
     * Store current response interceptors
     * @protected
     */
    protected currentResponseInterceptors: RepositoryInterceptors;
    /**
     * HTTP Promise instance
     *
     * @deprecated Using Promise http request is deprecated. Now all http requests must use Observable
     *
     * @type {AxiosInstance}
     */
    protected http: AxiosInstance;
    /**
     * HTTP Observable instance
     *
     * @type {Axios}
     */
    protected httpObservable: Axios;
    /**
     * Construct a repository
     * @param httpConfig {AxiosRequestConfig}
     * @param baseURL {string}
     */
    constructor(httpConfig: AxiosRequestConfig, baseURL?: string);
    /**
     * Set baseURL for both http instances of this repository
     *
     * @param baseURL {string}
     */
    set baseURL(baseURL: string);
    /**
     * Add a repository to static instance array
     *
     * @param repository {Repository}
     */
    static addRepository(repository: Repository): void;
    /**
     * Get all repository instances
     *
     * @return {Repository[]}
     */
    static getInstances(): Repository[];
    /**
     * Eject an interceptor
     * @param type {'request' | 'response' | 'both'}
     */
    ejectInterceptor: (type: 'request' | 'response' | 'both') => void;
}

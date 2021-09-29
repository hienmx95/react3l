import { Repository } from '@react3l/react3l/core/repository';
import { TranslationResource } from '@react3l/react3l/services/translation-service';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * Translation repository
 * Load translation resources via HTTP
 */
export declare class TranslationRepository extends Repository {
    /**
     * Repository instances
     *
     * @type instances {TranslationRepository[]}
     */
    static instances: TranslationRepository[];
    constructor(httpConfig?: AxiosRequestConfig);
    /**
     * Translation resource base URL getter
     */
    static get baseURL(): string;
    /**
     * Translation resource base URL setter
     */
    static set baseURL(baseURL: string);
    /**
     * HTTP Response Interceptor
     *
     * @param response {AxiosResponse}
     * @return {AxiosResponse | Promise<AxiosResponse>}
     */
    responseInterceptor: (response: AxiosResponse) => any;
    /**
     * Get language resource
     *
     * @param language {string}
     * @return {TranslationResource}
     */
    get: (language: string) => Promise<TranslationResource>;
}
export declare const translationRepository: TranslationRepository;

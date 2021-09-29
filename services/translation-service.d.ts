import { InitOptions, TFunction } from 'i18next';
export interface TranslationResource {
    [key: string]: string;
}
export declare enum Language {
    vi = "vi",
    en = "en"
}
export declare class TranslationService {
    translate: TFunction;
    initialOptions: InitOptions;
    constructor(defaultLanguage?: string);
    initTranslation: (options?: InitOptions) => Promise<void>;
    changeLanguage: (language: string, resource?: TranslationResource) => Promise<void>;
    setLanguage: (language: string, resource: TranslationResource) => Promise<void>;
    addResource: (language: string, resource: TranslationResource) => Promise<void>;
}
export declare const translationService: TranslationService;

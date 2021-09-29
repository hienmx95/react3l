import { Model } from '@react3l/react3l/core';
import React, { Dispatch } from 'react';
import { FormAction } from '@react3l/react3l/form/types/form-action';
import { FormState } from '@react3l/react3l/form/types/form-state';
export declare type HTMLTypingElement = HTMLInputElement | HTMLTextAreaElement;
export declare type FormFieldHTMLChangeHandler<T extends Model, P extends keyof T> = (event: React.ChangeEvent<HTMLTypingElement>) => void;
export declare type FormFieldPureChangeHandler<T extends Model, P extends keyof T> = (fieldValue: T[P]) => void;
export declare type FormFieldChangeHandler<T extends Model, P extends keyof T> = (FormFieldHTMLChangeHandler<T, P>) | (FormFieldPureChangeHandler<T, P>);
export declare function useFormField<T extends Model, P extends keyof T, FieldType = HTMLInputElement | HTMLTextAreaElement>(form: FormState<T>, dispatch: Dispatch<FormAction<T>>, fieldName: P): [T[P], FormFieldChangeHandler<T, P>];

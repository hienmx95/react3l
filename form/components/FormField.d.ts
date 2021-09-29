export interface FormFieldProps {
    onFocus(): () => void;
    onBlur(): () => void;
    onChange(): () => void;
    fieldName: string;
}
export declare function FormField(props: FormFieldProps): null;

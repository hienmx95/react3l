import { useForm } from '@react3l/react3l/form/use-form';
import { useFormField } from '@react3l/react3l/form/use-form-field';
import { useValidation } from '@react3l/react3l/form/use-validation';
import { validate } from '@react3l/react3l/form/validate';
export var formService = {
    useForm: useForm,
    useFormField: useFormField,
    useValidation: useValidation,
    validate: validate,
    hasError: function (form, errors, field) {
        return form.touched[field] && (errors === null || errors === void 0 ? void 0 : errors.hasOwnProperty(field)) && !!errors[field];
    },
    getErrorState: function (form, errors, field) {
        return this.hasError(form, errors, field) ? 'error' : undefined;
    },
    getErrorMessage: function (form, errors, field) {
        return this.hasError(form, errors, field) ? errors[field] : undefined;
    },
};
//# sourceMappingURL=form-service.js.map
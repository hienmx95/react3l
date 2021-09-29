import React from 'react';
import { formReducer } from '@react3l/react3l/form/reducers/form-reducer';
import { FormActionType } from '@react3l/react3l/form/types/form-action-type';
import { useValidationTrigger } from '@react3l/react3l/form/use-validation-trigger';
export function useForm(ModelClass, initialValue, validationSchema) {
    var _a = React.useReducer(formReducer, {
        values: initialValue !== null && initialValue !== void 0 ? initialValue : new ModelClass(),
        dirty: {},
        touched: {},
        validationSchema: validationSchema,
    }), form = _a[0], dispatch = _a[1];
    var errors = useValidationTrigger(form)[0];
    var handleFocus = React.useCallback(function (fieldName) { return function () {
        dispatch({
            type: FormActionType.focus,
            fieldName: fieldName,
        });
    }; }, []);
    var handleBlur = React.useCallback(function (fieldName) { return function () {
        dispatch({
            type: FormActionType.blur,
            fieldName: fieldName,
            validationSchema: validationSchema,
        });
    }; }, [validationSchema]);
    var handleObjectChange = React.useCallback(function (fieldName) { return function (record) {
        dispatch({
            type: FormActionType.objectChange,
            fieldName: fieldName,
            fieldValue: record,
        });
    }; }, []);
    return {
        form: form,
        errors: errors,
        handleFocus: handleFocus,
        handleBlur: handleBlur,
        dispatch: dispatch,
        handleObjectChange: handleObjectChange,
    };
}
//# sourceMappingURL=use-form.js.map
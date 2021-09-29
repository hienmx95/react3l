import React from 'react';
import { FormActionType } from '@react3l/react3l/form/types/form-action-type';
export function useFormField(form, dispatch, fieldName) {
    var value = form.values[fieldName];
    var handleSimpleChange = React.useCallback(function (event) {
        if ('target' in event) {
            dispatch({
                type: FormActionType.simpleChange,
                fieldName: fieldName,
                fieldValue: event.target.value,
            });
        }
        else {
            dispatch({
                type: FormActionType.simpleChange,
                fieldName: fieldName,
                fieldValue: event,
            });
        }
    }, [dispatch, fieldName]);
    return [
        value,
        handleSimpleChange,
    ];
}
//# sourceMappingURL=use-form-field.js.map
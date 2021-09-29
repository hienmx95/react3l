var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import { formService } from '@react3l/react3l/form';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as YUP from 'yup';
import { TestUser } from '@react3l/react3l/__tests__/models/TestUser';
var FormItem = Form.Item;
export default {
    title: 'Form',
};
var sampleClasses = [
    {
        id: 1,
        code: '1',
        name: 'Class 1',
    },
    {
        id: 2,
        code: '2',
        name: 'Class 2',
    },
];
var formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};
var preservedNames = [
    'test',
    'ht',
];
export var useForm = function UseForm() {
    var translate = useTranslation()[0];
    var userSchema = YUP.object().shape({
        name: YUP
            .string()
            .required(translate('form.name.required'))
            .min(2, translate('form.name.min', { min: 2 }))
            .max(30, translate('form.name.max', { max: 2 }))
            .test('preserved', translate('form.name.preserved', { names: preservedNames.join(' ') }), function (value) {
            return new Promise(function (resolve) {
                if (preservedNames.includes(value)) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        }),
        email: YUP
            .string()
            .required(translate('form.email.required'))
            .min(2, translate('form.email.min', { min: 2 }))
            .max(30, translate('form.email.max', { max: 2 })),
        userClassId: YUP.number()
            .required(translate('form.userClass.required')),
    });
    var _a = formService.useForm(TestUser, undefined, userSchema), form = _a.form, dispatch = _a.dispatch, handleFocus = _a.handleFocus, handleBlur = _a.handleBlur, handleObjectChange = _a.handleObjectChange, errors = _a.errors;
    var _b = formService.useFormField(form, dispatch, 'name'), name = _b[0], handleChangeName = _b[1];
    var _c = formService.useFormField(form, dispatch, 'email'), email = _c[0], handleChangeEmail = _c[1];
    var handleChangeClass = React.useCallback(function (id) {
        var selectedClass = sampleClasses.find(function (sampleClass) { return sampleClass.id === id; });
        handleObjectChange('userClass')(selectedClass);
    }, [handleObjectChange]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, __assign({}, formLayout),
            React.createElement(FormItem, { label: "Name", validateStatus: formService.getErrorState(form, errors, 'name'), help: formService.getErrorMessage(form, errors, 'name') },
                React.createElement(Input, { onFocus: handleFocus('name'), onBlur: handleBlur('name'), value: name, onChange: handleChangeName })),
            React.createElement(FormItem, { label: "Email", validateStatus: formService.getErrorState(form, errors, 'email'), help: formService.getErrorMessage(form, errors, 'email') },
                React.createElement(Input, { onFocus: handleFocus('email'), onBlur: handleBlur('email'), value: email, onChange: handleChangeEmail })),
            React.createElement(FormItem, { label: "Class" },
                React.createElement(Select, { onFocus: handleFocus('userClassId'), onBlur: handleBlur('userClassId'), value: form.values.userClassId, onChange: handleChangeClass }, sampleClasses.map(function (sampleClass) { return (React.createElement(Select.Option, { value: sampleClass.id, key: sampleClass.id }, sampleClass.name)); }))))));
};
//# sourceMappingURL=form.stories.js.map
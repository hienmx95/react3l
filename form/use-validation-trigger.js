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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import { DEBOUNCE_TIME_100 } from '@react3l/react3l/config';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { commonService } from '@react3l/react3l/services/common-service';
var FormValidationErrorActionType;
(function (FormValidationErrorActionType) {
    FormValidationErrorActionType[FormValidationErrorActionType["patch"] = 0] = "patch";
    FormValidationErrorActionType[FormValidationErrorActionType["delete"] = 1] = "delete";
})(FormValidationErrorActionType || (FormValidationErrorActionType = {}));
function errorReducer(state, action) {
    var _a, _b;
    switch (action.type) {
        case FormValidationErrorActionType.patch:
            return __assign(__assign({}, state), (_a = {}, _a[action.fieldName] = action.fieldValue, _a));
        case FormValidationErrorActionType.delete:
            return __assign(__assign({}, state), (_b = {}, _b[action.fieldName] = undefined, _b));
        default:
            return state;
    }
}
/**
 * Validate a form
 *
 * @template T
 * @param form {T}
 * @throws {FormValidationErrors<T>}
 */
export function useValidationTrigger(form) {
    var _this = this;
    var _a = React.useReducer(errorReducer, {}), errors = _a[0], dispatchErrors = _a[1];
    var subject = React.useRef(new Subject()).current;
    var subscription = commonService.useSubscription()[0];
    React.useEffect(function () {
        subscription.add(subject
            .pipe(debounceTime(DEBOUNCE_TIME_100), distinctUntilChanged())
            .subscribe(function (validationTrigger) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, validationTrigger()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }));
    }, [subject, subscription]);
    React.useEffect(function () {
        subject.next(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!((_a = form.validationSchema) === null || _a === void 0 ? void 0 : _a.fields)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(Object.entries((_b = form.validationSchema) === null || _b === void 0 ? void 0 : _b.fields)
                                .map(function (_a) {
                                var key = _a[0], validationSchema = _a[1];
                                return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0: return [4 /*yield*/, validationSchema.validate(form.values[key])
                                                    .then(function () {
                                                    dispatchErrors({
                                                        type: FormValidationErrorActionType.delete,
                                                        fieldName: key,
                                                    });
                                                })
                                                    .catch(function (error) {
                                                    dispatchErrors({
                                                        type: FormValidationErrorActionType.patch,
                                                        fieldName: key,
                                                        fieldValue: error.message,
                                                    });
                                                })];
                                            case 1:
                                                _b.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }))];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    }, [form, subject]);
    return [
        errors,
    ];
}
//# sourceMappingURL=use-validation-trigger.js.map
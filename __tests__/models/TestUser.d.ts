import { Model } from '@react3l/react3l/core';
import { Moment } from 'moment';
import { TestClass } from '@react3l/react3l/__tests__/models/TestClass';
export declare class TestUser extends Model {
    code?: string;
    name?: string;
    email?: string;
    birthday?: Moment;
    userClassId?: number;
    userClass?: TestClass;
}

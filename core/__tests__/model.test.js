import 'reflect-metadata';
import { TestUser } from '@react3l/react3l/__tests__/models/TestUser';
test('model', function () {
    var testId = 1;
    var testName = 'Test Name';
    var testUser = TestUser.clone({
        id: testId,
        name: testName,
    });
    expect(testUser.id).toEqual(testId);
    expect(testUser.name).toEqual(testName);
    expect(testUser instanceof TestUser).toEqual(true);
});
//# sourceMappingURL=model.test.js.map
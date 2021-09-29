import moment from 'moment';
import { deserialize, serialize } from '@react3l/react3l/helpers/serialization';
import { standardDateTime } from '@react3l/react3l/helpers/time';
import { TIMEZONE_OFFSET } from '@react3l/react3l/config/consts';
test('serialize works', function () {
    var dateValue = '2020-06-28T17:23:54.235' + TIMEZONE_OFFSET;
    var input = {
        name: 'name',
        number: 1,
        date: moment(dateValue),
        dates: [
            moment(dateValue),
        ],
    };
    var serializedValue = serialize(input);
    expect(serializedValue.date).toEqual(dateValue);
    expect(serializedValue.dates[0]).toEqual(dateValue);
    expect(serializedValue.name).toEqual(input.name);
    expect(serializedValue.number).toEqual(input.number);
});
test('deserialize works', function () {
    var dateValue = '2020-06-19T17:06:23.234Z';
    var input = {
        date: dateValue,
        array: [
            'simple string',
            dateValue,
        ],
        object: {
            date: dateValue,
        },
    };
    var deserializedValue = deserialize(input);
    expect(standardDateTime(deserializedValue.date)).toEqual(dateValue);
    expect(standardDateTime(deserializedValue.object.date)).toEqual(dateValue);
    expect(standardDateTime(deserializedValue.array[1])).toEqual(dateValue);
    expect(deserializedValue.array[0]).toEqual(input.array[0]);
});
//# sourceMappingURL=serialization.test.js.map
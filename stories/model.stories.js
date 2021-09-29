import React from 'react';
import { TestUser } from '@react3l/react3l/__tests__/models/TestUser';
export default {
    title: 'Model',
};
export function SampleModel() {
    var user1 = React.useRef(new TestUser()).current;
    var user2 = React.useRef(TestUser.clone({
        name: 'User 2',
    })).current;
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null,
            "user instanceof TestUser: ",
            user1 instanceof TestUser ? 'true' : 'false'),
        React.createElement("p", null,
            "user2's name: ",
            user2.name),
        React.createElement("p", null,
            "user2 instanceof TestUser: ",
            user2 instanceof TestUser ? 'true' : 'false')));
}
//# sourceMappingURL=model.stories.js.map
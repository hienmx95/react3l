import Switch from 'antd/lib/switch';
import React from 'react';
import { commonService } from '@react3l/react3l/services/common-service';
export default {
    title: 'Common State/Boolean',
};
export var useBoolean = function () {
    var _a = commonService.useBooleanState(false), state = _a[0], handleToggleState = _a[1];
    return (React.createElement(Switch, { checked: state, onChange: handleToggleState }));
};
//# sourceMappingURL=use-boolean.stories.js.map
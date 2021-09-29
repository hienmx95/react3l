import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translationService } from '@react3l/react3l/services';
import { commonService } from '@react3l/react3l/services/common-service';
export default {
    title: 'Common State/Subscription',
};
var SubscriptionHook = function () {
    var subscription = commonService.useSubscription()[0];
    var translate = useTranslation()[0];
    React.useEffect(function () {
        return function cleanup() {
            var closed = subscription.closed;
            if (closed) {
                message.info(translate('subscription.unsubscribeSuccessfully'));
            }
        };
    }, [subscription, subscription.closed, translate]);
    return null;
};
export function useSubscription() {
    var _a = React.useState(true), mounted = _a[0], setMounted = _a[1];
    var handleUnmount = React.useCallback(function () {
        setMounted(false);
    }, []);
    return (React.createElement(React.Fragment, null,
        mounted && (React.createElement(SubscriptionHook, null)),
        React.createElement(Button, { onClick: handleUnmount }, translationService.translate('subscription.unmount'))));
}
//# sourceMappingURL=use-subscription.stories.js.map
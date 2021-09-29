import React from 'react';
import { Subscription } from 'rxjs';
/**
 * Use a subscription state to cancel async tasks
 */
export function useSubscription() {
    var subscription = React.useRef(new Subscription()).current;
    React.useEffect(function () {
        return function cleanup() {
            subscription.unsubscribe();
        };
    }, [subscription]);
    return [
        subscription,
    ];
}
//# sourceMappingURL=use-subscription.js.map
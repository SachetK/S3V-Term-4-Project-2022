import React from 'react';
import {withAuthenticationRequired} from '@auth0/auth0-react';

const ProtectedRoute = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
            onRedirecting: () => window.location.origin,
    });
    return <Component />
};

export default ProtectedRoute;
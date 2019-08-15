import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import LayoutRoute from '../layout/Layout';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <LayoutRoute {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
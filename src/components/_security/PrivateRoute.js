import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from '../layout/Layout';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Layout> <Component {...props} /> </Layout>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
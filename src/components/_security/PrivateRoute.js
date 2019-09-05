import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Layout from '../layout/Layout';

function checkToken(){
    var isExpired = false;
    const token = localStorage.getItem('token');
    
    var decodedToken=jwt_decode(token, {complete: true});
    var dateNow = new Date();

    if(decodedToken.exp*1000 < dateNow.getTime()){
        isExpired = true;
    }
    return isExpired;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? (checkToken() ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            : <Layout> <Component {...props} /> </Layout>)
            : <Redirect to={{ pathname: '/forbidden', state: { from: props.location } }} />
    )} />
)

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        (localStorage.getItem('token') && JSON.parse(localStorage.getItem('user')).idTipeUser.tipe.includes('Admin'))
            ? (checkToken() ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            : <Layout> <Component {...props} /> </Layout>)
            : <Redirect to={{ pathname: '/forbidden', state: { from: props.location } }} />
    )} />
)

export const SuperAdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        (localStorage.getItem('token') && JSON.parse(localStorage.getItem('user')).idTipeUser.tipe.includes('Super'))
            ? (checkToken() ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            : <Layout> <Component {...props} /> </Layout>)
            : <Redirect to={{ pathname: '/forbidden', state: { from: props.location } }} />
    )} />
)
import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../partials/Header/Header';
import Sidebar from '../partials/Sidebar/Sidebar';
import Login from '../Auth/Login';
import Registrasi from '../Auth/Registrasi';

const layout = ( props ) => (
    <Aux>
        {/* <Header />
        <Sidebar /> */}
        {/* <Login /> */}
        <Registrasi />
    </Aux>
);

export default layout;
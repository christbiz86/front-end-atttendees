import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../partials/Header/Header';
import Sidebar from '../partials/Sidebar/Sidebar';
import {HashRouter}  from 'react-router-dom';
import ContentPage from '../partials/ContentPage'

const layout = ( props ) => (
    <Aux>
        <HashRouter>
            <Header />
            <Sidebar />
            <ContentPage/>
        </HashRouter>
    </Aux>
);

export default layout;


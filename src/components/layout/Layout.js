import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../partials/Header';
import LeftSidebar from '../partials/LeftSidebar';
import ContentPage from '../partials/ContentPage';
// import './Layout.css';
import {HashRouter} from "react-router-dom";

const layout = ( props ) => (
    <Aux>
        <HashRouter>
            <Header/>
            <LeftSidebar/>
            <ContentPage/>
        </HashRouter>
    </Aux>
);

export default layout;
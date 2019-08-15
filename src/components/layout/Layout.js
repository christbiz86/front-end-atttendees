import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../partials/Header/Header';
import Sidebar from '../partials/Sidebar/Sidebar';
import Content from '../partials/Content/Content';

const layout = ( props ) => (
    <Aux>
        <Header />
        <Sidebar />
        <Content />
    </Aux>
);

export default layout;


import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../partials/Header/Header';
import Sidebar from '../partials/Sidebar/Sidebar';

const layout = ( props ) => (
    <Aux>
        <Header />
        <Sidebar />
    </Aux>
);

export default layout;


import React, { Component } from 'react';
import Dashboard from './Dashboard';
import TimeSheet from './TimeSheet';
import Employee from './Employee';
import Annual from './Annual';
import Unit from './Unit';
import Posisi from './Posisi';
import Company from './Company';
<<<<<<< HEAD
import Report from './Report';
=======
import Reporting from './Reporting';
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d

class Sidebar extends Component {
    render(){
        return(
            <div className="left side-menu">
                <div className="sidebar sidebar-inner slimscrollleft">
                    <div id="sidebar-menu">
                        <ul>
                            <li className="text-muted menu-title">Navigation</li>
                            <Dashboard />
                            <Company />
                            <TimeSheet />
                            <Employee />
                            <Annual />
<<<<<<< HEAD
                            <Unit />
                            <Posisi />
                            <Report />
=======
                            <Reporting />
                            <Unit />
                            <Posisi />
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
} 

export default Sidebar;


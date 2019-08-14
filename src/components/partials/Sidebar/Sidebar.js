import React, { Component } from 'react';
import Dashboard from './Dashboard';
import TimeSheet from './TimeSheet';
import Employee from './Employee';
import Annual from './Annual';
import Unit from './Unit';
import Posisi from './Posisi';
import Company from './Company';

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
                            <Unit />
                            <Posisi />
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


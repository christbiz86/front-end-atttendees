import React, { Component } from 'react';

class Employee extends Component {
    render(){
        return(
            <li>
                <a href="#" className="waves-effect"><i className="ti-user"></i> <span> Employee </span> <span className="menu-arrow"></span></a>
            
                <ul className="list-unstyled treeview-menu">
                    <li>
                        <a href={"/user"}  className="waves-effect">User</a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Employee;
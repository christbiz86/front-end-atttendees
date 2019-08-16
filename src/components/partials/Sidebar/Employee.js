import React, { Component } from 'react';

class Employee extends Component {
    render(){
        return(
<<<<<<< HEAD
            <li>
                <a href={'./employee'} className="waves-effect"><i className="ti-user"></i> <span> Employee </span></a>
=======
            <li className="has_sub treeview">
                <a href="#" className="waves-effect"><i className="ti-user"></i> <span> Employee</span> <span className="menu-arrow"></span></a>
                <ul className="list-unstyled treeview-menu">
                    <li><a href={'/employee'} className="waves-effect">List Employee</a></li>
                    <li><a href={'/employee/form'} className="waves-effect">Add Employee</a></li>
                </ul>
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
            </li>
        );
    }
}

export default Employee;
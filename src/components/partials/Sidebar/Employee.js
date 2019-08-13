import React, { Component } from 'react';

class Employee extends Component {
    render(){
        return(
            <li>
                <a href={'./employee'} className="waves-effect"><i className="ti-user"></i> <span> Employee </span></a>
            </li>
        );
    }
}

export default Employee;
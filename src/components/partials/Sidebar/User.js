import React, { Component } from 'react';

class User extends Component {
    render(){
        return(
            <li>
                <a href="#" className="waves-effect"><i className="ti-user"></i> <span> User </span></a>
            </li>
        );
    }
}

export default User;
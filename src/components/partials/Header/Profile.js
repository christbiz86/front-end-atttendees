import React, { Component } from 'react';

class Profile extends Component {
    render(){
        return(
                <li className="dropdown top-menu-item-xs">
                    <a href="" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true"><img src="../../../images/users/avatar-1.jpg" alt="user-img" className="img-circle"/> </a>
                    <ul className="dropdown-menu">
                        <li><a href="#"><i className="ti-user m-r-10 text-custom"></i> Profile</a></li>
                        <li><a href="#"><i className="ti-settings m-r-10 text-custom"></i> Settings</a></li>
                        <li><a href="#"><i className="ti-lock m-r-10 text-custom"></i> Lock screen</a></li>
                        <li className="divider"></li>
                        <li><a href={'/login'}><i className="ti-power-off m-r-10 text-danger"></i> Logout</a></li>
                    </ul>
                </li>
        );
    }
}

export default Profile;
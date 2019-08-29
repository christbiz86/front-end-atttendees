import React from 'react';

export default function Navbar(){
    return(
        <div>
            <div className="pull-left">
                <button className="button-menu-mobile open-left waves-effect waves-light">
                    <i className="md md-menu"></i>
                </button>
                <span className="clearfix"></span>
            </div>

            <ul className="nav navbar-nav hidden-xs">
                <li className="dropdown">
                    <a href="#action" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                        role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span
                        className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#action">Action</a></li>
                        <li><a href="#action">Another action</a></li>
                        <li><a href="#action">Something else here</a></li>
                        <li><a href="#action">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
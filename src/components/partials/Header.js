import React from 'react';
import Navbar from './Navbar';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/core.css';
import '../../assets/css/components.css';
import '../../assets/css/icons.css';
import '../../assets/css/pages.css';
import '../../assets/css/responsive.css';

export default function Header(){
    return(
        <div id="wrapper">
            <div className="topbar">
                <div className="topbar-left">
                    <div className="text-center">
                        <a href="#" className="logo">
                            <i className="icon-magnet icon-c-logo"></i><span>Attendee</span>
                        </a>
                    </div>
                </div>

                <Navbar/>

            </div>
        </div>
    );
}
import React from 'react';
import Navbar from './Navbar';

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
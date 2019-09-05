import React, { Component } from 'react';

class Attendee extends Component {
    render(){
        const {isSuperAdmin} = this.props;
        return(
            <li>
                <a href={'/attendee/absen'} className="waves-effect"><i className="ti-user"></i> <span> Absen </span></a>
            </li>
        );
    }
}

export default Attendee;
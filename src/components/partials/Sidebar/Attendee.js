import React, { Component } from 'react';

class Attendee extends Component {
    render(){
        return(
            <li>
                <a href={'/attendee'} className="waves-effect"><i className="md-location-city"></i> <span> Attendee </span></a>
            </li>
        );
    }
}

export default Attendee;
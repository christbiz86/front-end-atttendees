import React, { Component } from 'react';
import axios from "axios";

let user = JSON.parse(localStorage.getItem('user'));

class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
           source:null
        }    
    }

    componentDidMount(){
        axios.get('http://localhost:8282/image/'+user.idUser.foto,{ 
            responseType: 'arraybuffer',
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            },
        )
        .then(response => {
            const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              '',
            ),
          );
          this.setState({ source: "data:;base64," + base64 });
        });
        
    }

    render(){
        return(
                <li className="dropdown top-menu-item-xs">
                    <a href="" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                        <img src={this.state.source} alt="user-img" className="img-circle"></img> </a>
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
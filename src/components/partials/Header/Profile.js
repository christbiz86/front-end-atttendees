import React, { Component } from 'react';
<<<<<<< HEAD
import axios from "axios";

let user = JSON.parse(localStorage.getItem('user'));

=======
import axios from 'axios';

let user = JSON.parse(localStorage.getItem('user'));
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
<<<<<<< HEAD
           source:null
=======
        source:null
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
        }    
    }

    componentDidMount(){
<<<<<<< HEAD
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
        
=======
        axios
        .get(
            'http://localhost:8080/image/'+user.idUser.foto,
            {   responseType: 'arraybuffer',
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
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
    }

    render(){
        return(
                <li className="dropdown top-menu-item-xs">
<<<<<<< HEAD
                    <a href="" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                        <img src={this.state.source} alt="user-img" className="img-circle"></img> </a>
=======
                    <a href={'/login'} className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                        <img src={this.state.source} alt="user-img" className="img-circle"/> </a>
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
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
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Layout from '../../layout/Layout';
import axios from 'axios';

const url = 'http://localhost:8080/usercompany';

class Coba extends Component {
    constructor(props) {
        super(props);
        this.state= {
            items: [],
            isLoading: true,
            tableRows: [],
        };
    }

    componentWillMount=async() => {
        await axios.get(url)
        .then(response => response.data)
        .then(data => {
            // console.log(data);
            // if(err) throw err;
            this.setState({ items: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false });

            // console.log(this.state.tableRows);
        })
    }

    assemblePosts= () => {
        let items = this.state.items.map((user) => {
            return (
                {
                    name: user.idUser.nama,
                    address: user.idUser.alamat,
                    date: user.idUser.tglLahir,
                    email: user.idUser.email,
                }
            )
        });

        return items;
    }
    render(){
        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name'
                },
                {
                    label: 'Address',
                    field: 'address'
                },
                {
                    label: 'Birth Date',
                    field: 'date'
                },
                {
                    label: 'Email',
                    field: 'email'
                },
            ],

            rows:this.state.tableRows,
        }

        return (
            <div>
                {/* <Layout /> */}
                <div>
                    <MDBDataTable striped bordered hover data={data} />
                </div>
            </div>
        );
    }
}

export default Coba;
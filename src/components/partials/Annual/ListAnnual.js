import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';
import Layout from '../../layout/Layout';
import axios from 'axios';

const url = 'http://localhost:8181/request/Approved';

class ListPengajuan extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoading: true,
            tableRows: [],
        };
    }

    componentWillMount=async() => {
        await axios.get(url)
        .then(response => response.data)
        .then(data => {
            this.setState({ items: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false });
        })
    }

    assemblePosts= () => {
        let items = this.state.items.map((annual) => {
            return (
                {
                    nik:annual.user.kode,
                    nama:annual.user.nama,
                    tglMulai:annual.tglMulai,
                    tglAkhir:annual.tglAkhir,
                    status:annual.status.status,
                }
                
            )
        });

        return items;
    }

    render() {
        const data = {
            columns: [
                {
                    label: 'Nik',
                    field: 'nik'
                },
                {
                    label: 'Nama',
                    field: 'nama'
                },
                {
                    label: 'Tanggal Mulai',
                    field: 'tglAwal'
                },
                {
                    label: 'Tanggal Selesai',
                    field: 'tglAkhir'
                },
                {
                    label: 'Status',
                    field: 'status'
                }
            ],

            rows:this.state.tableRows,
        }
            return (
                <div>
                <Layout />
                <div className="content-page">
                    <div className="content">
                        <div className="container">
                            {/* Page Title */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4 className="page-title">Annual List</h4>
                                    <ol classNameass="breadcrumb">
                                        <li>
                                            <a href="#">annual</a>
                                        </li>
                                        <li claclassNamess="active">
                                            list
                                        </li>
                                    </ol>
                            

                                    <div className="card-box table-responsive" id="shift-list">
                                        <h4 className="m-t-0 header-title"><b>Daftar Cuti Karyawan </b></h4>
                                        <MDBDataTable striped bordered data={data} />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            );
        }


    }
export default ListPengajuan;
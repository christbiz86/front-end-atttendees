import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Layout from '../../layout/Layout';
import axios from 'axios';

const url = 'http://localhost:8080/usercompany';

class Employee extends Component {
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
            this.setState({ items: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false });
        })
    }

    assemblePosts= () => {
        let items = this.state.items.map((user) => {
            return (
                {
                    name: user.idUser.nama,
                    address: user.idUser.alamat,
                    date: user.idUser.tglLahir,
                    telp: user.idUser.telp,
                    email: user.idUser.email,
                    unit: user.idCompanyUnitPosisi.idUnit==null ? "-" : user.idCompanyUnitPosisi.idUnit.unit,
                    posisi: user.idCompanyUnitPosisi.idPosisi==null ? "-" : user.idCompanyUnitPosisi.idPosisi.posisi,
                    tipeUser: user.idTipeUser.tipe
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
                    label: 'Phone',
                    field: 'telp'
                },
                {
                    label: 'Email',
                    field: 'email'
                },
                {
                    label: 'Unit',
                    field: 'unit'
                },
                {
                    label: 'Posisi',
                    field: 'posisi'
                },
                {
                    label: 'Tipe User',
                    field: 'tipeUser'
                }
            ],

            rows:this.state.tableRows,
        }
        return(
            <div>
                <Layout />
                <div className="content-page">
                    <div className="content">
                        <div className="container">
                            {/* Page Title */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4 className="page-title">Employee</h4>
                                    <ol class="breadcrumb">
                                        <li>
                                            <a href="#">Attendee</a>
                                        </li>
                                        <li>
                                            <a href="#">Employee</a>
                                        </li>
                                        <li class="active">
                                            User
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul class="nav nav-tabs tabs">
                                        <li class="active tab">
                                            <a href="#shift-list" data-toggle="tab" aria-expanded="false"> 
                                                <span class="visible-xs"><i class="fa fa-home"></i></span> 
                                                <span class="hidden-xs">User List</span> 
                                            </a> 
                                        </li>
                                        <li class="tab"> 
                                            <a href="#insert-form" data-toggle="tab" aria-expanded="true"> 
                                                <span class="visible-xs"><i class="fa fa-envelope-o"></i></span> 
                                                <span class="hidden-xs">Insert Form</span> 
                                            </a> 
                                        </li>
                                    </ul> 
                                    
                                    <div className="card-box" id="insert-form">
                                        <h4 className="m-t-0 header-title"><b>Insert Form</b></h4>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label">Code</label>
                                                        <div className="col-md-8">
                                                            <input type="text" name="kode" className="form-control" required placeholder="Shift Code" onChange={this.handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label">Check In</label>
                                                        <div className="col-md-8">
                                                            {/* <div class="input-group m-b-15"> */}
                                                                {/* <div className="input-timepicker">
                                                                    <input id="timepicker2" name="masuk" type="text" required className="form-control" onChange={this.handleChange} />
                                                                </div>
                                                                <span class="input-group-addon bg-custom b-0 text-white"><i class="glyphicon glyphicon-time"></i></span> */}
                                                                <div class="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                                    <input type="text" name="masuk" class="form-control" value="13:14" onChange={this.handleChange} />
                                                                    <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span>
                                                                </div>
                                                            {/* </div> */}
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label">Check Out</label>
                                                        <div className="col-md-8">
                                                            {/* <div class="input-group m-b-15"> */}
                                                                {/* <div className="input-timepicker">
                                                                    <input id="timepicker3" name="pulang" type="text" required className="form-control" onChange={this.handleChange} />
                                                                </div>
                                                                <span class="input-group-addon bg-custom b-0 text-white"><i class="glyphicon glyphicon-time"></i></span> */}
                                                                <div class="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                                    <input type="text" name="pulang" class="form-control" value="13:14" onChange={this.handleChange} />
                                                                    <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span>
                                                                </div>
                                                            {/* </div> */}
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-sm-offset-3 col-sm-9 m-t-15">
                                                            <button type="submit" className="btn btn-primary" value="Submit">
                                                                Submit
                                                            </button>
                                                            <button type="reset" className="btn btn-default m-l-5">
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-box table-responsive" id="shift-list">
                                        <h4 className="m-t-0 header-title"><b>Employee List</b></h4>
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

export default Employee;
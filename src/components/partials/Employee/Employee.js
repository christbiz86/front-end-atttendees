<<<<<<< HEAD
import React, { Component } from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import Layout from '../../layout/Layout';
import axios from 'axios';

const url = 'http://localhost:8181/usercompany';

class Employee extends Component {
    constructor(props) {
        super(props);

        this.state= {
            items: [],
            isLoading: true,
            tableRows: [],
            modalEdit: false
        };
    }

    
    componentWillMount=async() => {
        
        await axios.request(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({ items: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false });
        })
    }

    assemblePosts= () => {
        let items = this.state.items.map((user,index) => {
            return (
                {
                    name: user.idUser.nama,
                    address: user.idUser.alamat,
                    date: user.idUser.tglLahir,
                    telp: user.idUser.telp,
                    email: user.idUser.email,
                    unit: user.idCompanyUnitPosisi.idUnit==null ? "-" : user.idCompanyUnitPosisi.idUnit.unit,
                    posisi: user.idCompanyUnitPosisi.idPosisi==null ? "-" : user.idCompanyUnitPosisi.idPosisi.posisi,
                    tipeUser: user.idTipeUser.tipe,
                    // action: <MDBBtn color="info">Edit</MDBBtn>
                    action: <button class="btn btn-primary waves-effect waves-light"  data-toggle="modal" data-target="#myModal">Edit</button>
                    // action: <a href="#" className="on-default edit-row" onClick="this.toggle(edit)"><i class="md-mode-edit"/></a> 
                        // delete: <a href="#" className="on-default"><i className="md-mode-edit"/></a> 
                    // action2: <a href="#" class="on-default edit-row"><i class="md-delete"/></a>   
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
                },
                {
                    label: 'Action',
                    field: 'action',
                    width: 10
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


                                    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h4 class="modal-title" id="myModalLabel">
                                                    
                                                        Modal Heading</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <h4>{this.state.items.name}</h4>
                                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                                    <hr/>
                                                    <h4>Overflowing text to show scroll behavior</h4>
                                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary waves-effect waves-light">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
=======
import React, {Component} from 'react';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            userCompany: [],
            userCom: {
                idUser:{
                    nama: 'Sule',
                    alamat: null,
                    email: null,
                    tglLahir: null,
                    telp: null,
                },
                idCompanyUnitPosisi:{
                    idCompany: {
                        nama: null
                    },
                    idUnit: {
                        unit: null
                    },
                    idPosisi: {
                        posisi: null
                    },
                },
                idTipeUser:{
                    tipe: null,
                }
            },
            error: null
        }
    }

    // constructor(props){
    //     super(props);
    //     this.state = {  
    //         isLoading: true,             /* Constructor getAll() */
    //         userCompany: [],
    //         error: null
    //     }
    // }

    handleSubmit = event =>{
        event.preventDefault();
    }

    fetchUserByFilter() {
        const userCom = this.state.userCom;
        fetch(`http://localhost:8080/usercompany/filter`, {
            method: 'POST',
            body: JSON.stringify(userCom),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data =>
            this.setState({
                userCompany: data,
                isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    // fetchUser() {
    //     fetch(`http://localhost:8080/usercompany`)
    //     .then(response => response.json())
    //     .then(data =>
    //         this.setState({
    //             userCompany: data,
    //             isLoading: false,
    //         })
    //     )
    //     .catch(error => this.setState({ error, isLoading: false }));         /* fetch Method GET */
    // }
  
    componentDidMount() {
        this.fetchUserByFilter();
        // this.fetchUser();
    }

    render() {
        return(
            <div className="content-page">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <h4 className="page-title">Datatable</h4>
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Ubold</a>
                            </li>
                            <li>
                                <a href="#">Tables</a>
                            </li>
                            <li className="active">
                                Datatable
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-box table-responsive">
                            <h4 className="m-t-0 header-title"><b>User</b></h4>
                            <p className="text-muted font-13 m-b-30"/>

                            <table id="datatable" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td>Nama User</td>
                                    <td>Alamat</td>
                                    <td>Tanggal Lahir</td>
                                    <td>Telp</td>
                                    <td>Email</td>
                                    <td>Company</td>
                                    <td>Unit</td>
                                    <td>Posisi</td>
                                    <td>Tipe User</td>
                                </tr>
                            </thead>

                            {this.state.error ? <p>{this.state.error.message}</p> : null}
                            {!this.state.isLoading ? (
                                this.state.userCompany.map(uc => {
                                    return (
                                        <tbody>
                                            <tr id={uc.id}>
                                                <td>{uc.idUser.nama}</td>
                                                <td>{uc.idUser.alamat}</td>
                                                <td>{uc.idUser.tglLahir}</td>
                                                <td>{uc.idUser.telp}</td>
                                                <td>{uc.idUser.email}</td>
                                                <td>{uc.idCompanyUnitPosisi.idCompany.nama}</td>
                                                <td>
                                                { uc.idCompanyUnitPosisi.idUnit==null ? "-" : uc.idCompanyUnitPosisi.idUnit.unit }
                                                </td>
                                                <td>
                                                { uc.idCompanyUnitPosisi.idPosisi==null ? "-" : uc.idCompanyUnitPosisi.idPosisi.posisi }
                                                </td>
                                                <td>{uc.idTipeUser.tipe}</td>
                                            </tr>
                                        </tbody>
                                    );
                                
                                })
                            ) : (
                                <h3>Loading...</h3>
                            )}

                            </table>
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
        );
    }
}

export default Employee;
=======
            </div>
        );
    }
}
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d

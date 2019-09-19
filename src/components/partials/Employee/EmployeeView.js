import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import * as Constant from '../../_helpers/constant';
import { history } from '../../_helpers';

let token = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user'));
class EmployeeView extends Component {
    constructor(props){
        super(props);
        this.handleClick.bind(this);
        this.state = {
            isLoading: true,
            id: this.props.location.data.idUser.id,
            kode: this.props.location.data.idUser.kode,
            nama: this.props.location.data.idUser.nama,
            alamat: this.props.location.data.idUser.alamat,
            tglLahir: moment(this.props.location.data.idUser.tglLahir, 'LLL').format('YYYY-MM-DD'), 
            telp: this.props.location.data.idUser.telp,
            email: this.props.location.data.idUser.email,
            password: this.props.location.data.idUser.password,
            foto: this.props.location.data.idUser.foto,
            idStatus: this.props.location.data.idUser.idStatus.id,
            createdBy: this.props.location.data.idUser.createdBy,
            createdAt: this.props.location.data.idUser.createdAt,
            updatedBy: this.props.location.data.idUser.updatedBy,
            updatedAt: this.props.location.data.idUser.updatedAt,

        }     
    }

    handleClick = event =>{
        event.preventDefault();

        const data = {
            id: this.state.id,
            kode: this.state.kode, 
            nama: this.state.nama, 
            alamat: this.state.alamat, 
            tglLahir: this.state.tglLahir, 
            telp: this.state.telp,
            email: this.state.email,
            password: this.state.password,
            foto: this.state.foto,
            idStatus: {
                id: this.state.idStatus
            },
            createdBy: this.state.createdBy,
            createdAt: this.state.createdAt,
            updatedBy: this.state.updatedBy,
            updatedAt: this.state.updatedAt
        }

        fetch(Constant.API_LIVE + '/user', { 
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => { res.json()
            if(res.ok){
                swal("Success!", "Data Successfully deleted!", "success")
                .then(function() {
                    window.location.href = "/employee";
                });
            }
            else {
                swal("Failed", "Delete Failed!", "error")
            }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); 
    }

    render () {
        return (
            <div className="content-page">
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btn-group pull-right m-t-15">
                                {/* <Link to='/employee'> */}
                                    <button onClick={history.goBack} className="btn btn-default btn-rounded waves-effect waves-light">
                                        <span className="btn-label"><i className="fa fa-arrow-left"></i></span>
                                        Back
                                    </button>
                                {/* </Link> */}
                            </div>
                            <h4 className="page-title">Detail Profile</h4>
                            <ol className="breadcrumb">
                                <li>
                                    <a href="/">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/employee">Employee</a>
                                </li>
                                <li className="active">
                                    Detail
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box table-responsive">
                            <h4 className="m-t-0 header-title"><b>Detail Profile</b>
                                </h4>
                                <hr />
                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Foto</label>
                                        <div className="col-lg-3">
                                            <img src={this.state.foto}></img>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-sm-2 control-label" >NIK</label>
                                        <div className="col-lg-3">
                                            <input type="text" id="kode" name="kode" className="form-control" disabled value={this.state.kode} placeholder="NIK"/>
                                        </div>
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Nama</label>
                                        <div className="col-lg-3">
                                            <input type="text" id="nama" name="nama" className="form-control"  disabled value={this.state.nama} placeholder="Nama"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Alamat</label>
                                        <div className="col-lg-3">
                                            <input type="text" id="alamat" name="alamat" className="form-control"  disabled value={this.state.alamat} placeholder="Alamat"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Tanggal Lahir</label>
                                        <div className="col-lg-3">
                                            <input type="date" id="tglLahir" name="tglLahir" className="form-control"  disabled value={this.state.tglLahir} placeholder="Tanggal Lahir"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Email</label>
                                        <div className="col-lg-3">
                                            <input type="text" id="email" name="email" className="form-control"  disabled value={this.state.email} placeholder="Email"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Telepon</label>
                                        <div className="col-lg-3">
                                            <input type="text" id="telp" name="telp" className="form-control"  disabled value={this.state.telp} placeholder="Telepon"/>
                                        </div>                                    
                                    </div>

                                    <div className="button-list">
                                    <Link to={{pathname: "/employee/update", data: this.props.location.data}}>
                                        <button className="btn btn-warning btn-rounded waves-effect waves-light">
                                            <span className="btn-label"><i className="fa fa-edit"></i></span>
                                            Edit
                                        </button>
                                    </Link>

                                    
                                        <button className="btn btn-danger btn-rounded waves-effect waves-light" onClick={this.handleClick} >
                                            <span className="btn-label"><i className="fa fa-trash"></i></span>
                                            Delete
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                © 2016. All rights reserved.
            </footer>

        </div>
        );
    }
}

export default EmployeeView;
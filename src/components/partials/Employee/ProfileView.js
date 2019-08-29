import React, { Component } from 'react';
import moment from 'moment';

let user = JSON.parse(localStorage.getItem('user'));

class ProfileView extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            id: user.idUser.id,
            kode: user.idUser.kode,
            nama: user.idUser.nama,
            alamat: user.idUser.alamat,
            tglLahir: moment(user.idUser.tglLahir, moment.ISO_8601), 
            telp: user.idUser.telp,
            email: user.idUser.email,
            password: user.idUser.password,
            foto: user.idUser.foto,
            idStatus: user.idUser.idStatus.id,
            createdBy: user.idUser.createdBy,
            createdAt: user.idUser.createdAt,
            updatedBy: user.idUser.updatedBy,
            updatedAt: user.idUser.updatedAt
        }
    }

    render () {
        return (
            <div className="content-page">
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title">Detail Profile</h4>
                            <ol className="breadcrumb">
                                <li>
                                    <a href="#">Profile</a>
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
                                        <label className="col-sm-2 control-label" >NIK</label>
                                        <div className="col-lg-6">
                                            <input type="text" id="kode" name="kode" className="form-control" disabled value={this.state.kode} placeholder="NIK"/>
                                        </div>
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Nama</label>
                                        <div className="col-lg-6">
                                            <input type="text" id="nama" name="nama" className="form-control"  disabled value={this.state.nama} placeholder="Nama"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Alamat</label>
                                        <div className="col-lg-6">
                                            <input type="text" id="alamat" name="alamat" className="form-control"  disabled value={this.state.alamat} placeholder="Alamat"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Tanggal Lahir</label>
                                        <div className="col-lg-6">
                                            <input type="date" id="tglLahir" name="tglLahir" className="form-control"  disabled value={this.state.tglLahir} placeholder="Tanggal Lahir"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Telepon</label>
                                        <div className="col-lg-6">
                                            <input type="text" id="telp" name="telp" className="form-control"  disabled value={this.state.telp} placeholder="Telepon"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Email</label>
                                        <div className="col-lg-6">
                                            <input type="text" id="email" name="email" className="form-control"  disabled value={this.state.email} placeholder="Email"/>
                                        </div>                                    
                                    </div>

                                    <div className="form-group clearfix">
                                        <label className="col-md-2 control-label" >Foto</label>
                                        <div className="col-lg-6">
                                            {/* <input type="text" id="foto" name="foto" className="form-control"  disabled value={this.state.foto} placeholder="Foto"/> */}
                                            <img src={this.state.foto}></img>
                                        </div>                                    
                                    </div>

                                            <a href="/profile/edit">
                                            <button class="btn btn-warning btn-rounded waves-effect waves-light">
                                                <span class="btn-label"><i class="fa fa-edit"></i></span>
                                                Edit
                                            </button>
                                            </a>
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

export default ProfileView;
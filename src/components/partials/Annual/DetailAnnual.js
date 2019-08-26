import React, { Component } from 'react';
// import Profile from './Profile';
import axios from 'axios';

let user = JSON.parse(localStorage.getItem('user'));

class DetailAnnual extends Component {
    constructor(props) {
        super(props);

        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
        
        this.state = {
            namauser: '',
            tglMulai: '',
            tglAkhir: '',
            keterangan: ''
        }
    }

    handleApprove(annual) {
        // event.preventDefault();
        this.approve(annual);
    }

    handleReject(annual) {
        this.reject(annual);
    }

    approve(annual){
        fetch('http://localhost:8080/request/Approved', {
            method: 'PATCH',
            body: JSON.stringify(annual),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        // .then(response => console.log('Success:', response))
        .then(() => { this.props.history.push('/') })
        .catch(error => console.error('Error:', error))
    }

    reject(annual) {
        fetch('http://localhost:8080/request/Rejected', {
            method: 'PATCH',
            body: 
            JSON.stringify(annual),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        // .then(response => console.log('Success:', response))
        .then(() => { this.props.history.push('/') })
        .catch(error => console.error('Error:', error))
    }

    render() {
        const { data } = this.props.location;
        // console.log(data);
        return(
            <>
            <div className="content-page">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4 className="page-title">Detail Annual</h4>
                                    <ol className="breadcrumb">
                                        <li>
                                            <a href="#">Attendee Application</a>
                                        </li>
                                        <li>
                                            <a href="#">Annual</a>
                                        </li>
                                        <li className="active">
                                            Detail Annual
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card-box table-responsive">
                                        <h4 className="m-t-0 header-title"><b>Detail Annual Employee  </b><small  className="font-600">{ data.request.userCompany.idUser.nama }</small></h4>
                                        <hr />
                                        {/* <form id="basic-form">    */}
                                            
                                            <div className="form-group clearfix">
                                                <label className="col-sm-2 control-label" >NIK</label>
                                                <div className="col-lg-6">
                                                    <input type="text" id="kode" name="kode" className="form-control" disabled value={data.request.userCompany.idUser.kode} placeholder="NIK"/>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-md-2 control-label" >Nama</label>
                                                <div className="col-lg-6">
                                                    <input type="text" id="nama" name="nama" className="form-control"  disabled value={data.request.userCompany.idUser.nama} placeholder="Nama"/>
                                                </div>                                    
                                            </div>
		                            
                                            <div className="form-group clearfix">
                                                <label className="col-md-2 control-label">Tanggal Cuti</label>
                                                <div className="col-lg-6">
                                                <div>
                                                    {/* {this.renderSelectionValue()} */}
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" disabled placeholder={data.request.tglMulai} value={data.request.tglMulai} />
                                                        <span className="input-group-addon bg-custom b-0 text-white"> sampai </span>
                                                        <input type="text" className="form-control"disabled  placeholder={data.request.tglAkhir} value={data.request.tglAkhir} />
                                                    </div>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-md-2 control-label">Keterangan Cuti</label>
                                                <div className="col-lg-6">
                                                    <textarea className="form-control" name="keterangan" disabled value={data.request.keterangan} rows="6"></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <a className="col-md-2 control-label"   />
                                                <div className="col-sm-2 control-label">
                                                </div>
                                            </div>
                                            
                                            <div className="form-group clearfix">
                                                {/* <label  className="col-sm-6 control-label"></label> */}
                                                <div className="control-label">
                                                    <button type="submit" className="btn btn-default waves-effect waves-light btn-md" id="sa-warning" value={data.request} onClick={() => this.handleApprove(data.request)}> Approve</button>
                                                </div>
                                                
                                            </div>
                                            <div className="form-group clearfix">
                                                <div className="control-label">
                                                    <button type="submit" className="btn btn-danger waves-effect waves-light btn-md" id="sa-warning" value={data.request} onClick={() => this.handleReject(data.request)}> Reject</button>
                                                </div>
                                            </div>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="footer">
                        © 2016. All rights reserved.
                    </footer>

                </div>
            </>
        );
    }
}

export default DetailAnnual;
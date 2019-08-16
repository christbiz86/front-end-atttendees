import React, { Component } from "react";
import Moment from "moment";
import Layout from '../../layout/Layout';

let user = JSON.parse(localStorage.getItem('user'));

class FormPengajuan extends Component {
    constructor(props){
        super(props);

        this.handleRequest = this.handleRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            
            namauser:user.idUser.nama,
            tglMulai:Moment().format('YYYY-MM-DD'),
            tglAkhir:Moment().format('YYYY-MM-DD'),
            keterangan:''
        }    
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    handleRequest = event => {
        event.preventDefault();   
        this.Request();
    };

    user(){

    }

    Request(){
        fetch('http://localhost:8282/request', {
                method: 'POST',
                body: JSON.stringify({
                    
                    kode:"",
                    user:user.idUser,
                    tglMulai:this.state.tglMulai,
                    tglAkhir:this.state.tglAkhir,
                    
                
                }),
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response),
            
             
            ); 
    }

    render() { 
        
        return (
            <div className="content-page">

				<div className="content">
                    <div className="container">

						<div className="row">
							<div className="col-sm-12">

								<h4 className="page-title">Form Annual</h4>
								<ol className="breadcrumb">
									<li>
										<a href="#">Annual</a>
									</li>
									<li className="active">
										Form
									</li>
								</ol>
							</div>
						</div>

                        
                        <div className="row">
                        	<div className="col-md-12">
                        		<div className="card-box">

                                    <div className="form-group clearfix">
                                        <label className="col-sm-2 control-label" ></label>
                                        <div className="col-lg-6">
                                            <h4 className="m-t-0 header-title"><b>PENGAJUAN CUTI</b></h4>    
                                        </div>
                                    </div>
                        			<p className="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                        <form id="basic-form"  onSubmit={this.handleRequest} >   
                                            
                                            <div className="form-group clearfix">
                                                <label className="col-sm-2 control-label" >NIK</label>
                                                <div className="col-lg-6">
                                                    <input type="text" id="kode" name="kode" className="form-control" disabled value={user.idUser.kode} placeholder="NIK"/>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-md-2 control-label" >Nama</label>
                                                <div className="col-lg-6">
                                                    <input type="text" id="nama" name="nama" className="form-control"  disabled value={this.state.namauser} placeholder="Nama"/>
                                                </div>                                    
                                            </div>
		                            
                                            <div className="form-group clearfix">
                                                <label className="col-md-2 control-label">Tanggal Cuti</label>
                                                <div className="col-lg-6">
                                                    <div className="input-daterange input-group" id="date-range">
                                               
                                                        <input type="text" className="form-control" readOnly name="tglMulai" onChange={this.handleChange} placeholder="DD/MM/YYYY" />
                                                    
                                                            <span className="input-group-addon bg-custom b-0 text-white"> sampai </span>

                                                        <input type="text" className="form-control" readOnly name="tglAkhir"onChange={this.handleChange}  placeholder="DD/MM/YYYY" />
                                                    
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-md-2 control-label">Keterangan Cuti</label>
                                                <div className="col-lg-6">
                                                    <textarea className="form-control" name="keterangan" onChange={this.handleChange} rows="6"></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <a className="col-md-2 control-label"   />
                                                <div className="col-sm-2 control-label">
                                                </div>
                                            </div>
                                            
                                            <div className="form-group clearfix">
                                                <label  className="col-sm-6 control-label"></label>
                                                <div className="col-sm-2 control-label">
                                                    <button type="submit" className="btn btn-default waves-effect waves-light btn-lg" id="sa-warning"> Submit</button>
                                                </div>
                                            </div>
                                            
                                        </form>
	                                        
                        				</div>                        				
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        );
        
    }
}

export default FormPengajuan;
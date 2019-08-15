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
        fetch('http://localhost:8181/request', {
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
            <div>
            <Layout />
            <div className="content-page">

				<div class="content">
                    <div class="container">

						<div class="row">
							<div class="col-sm-12">

								<h4 class="page-title">Form Annual</h4>
								<ol class="breadcrumb">
									<li>
										<a href="#">Annual</a>
									</li>
									<li class="active">
										Form
									</li>
								</ol>
							</div>
						</div>

                        
                        <div class="row">
                        	<div class="col-md-12">
                        		<div class="card-box">

                                    <div class="form-group clearfix">
                                        <label class="col-sm-2 control-label" ></label>
                                        <div class="col-lg-6">
                                            <h4 class="m-t-0 header-title"><b>PENGAJUAN CUTI</b></h4>    
                                        </div>
                                    </div>
                        			<p class="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                        <form id="basic-form"  onSubmit={this.handleRequest} >   
                                            
                                            <div class="form-group clearfix">
                                                <label class="col-sm-2 control-label" >NIK</label>
                                                <div class="col-lg-6">
                                                    <input type="text" id="kode" name="kode" class="form-control" disabled value={user.idUser.kode} placeholder="NIK"/>
                                                </div>
                                            </div>

                                            <div class="form-group clearfix">
                                                <label class="col-md-2 control-label" >Nama</label>
                                                <div class="col-lg-6">
                                                    <input type="text" id="nama" name="nama" class="form-control"  disabled value={this.state.namauser} placeholder="Nama"/>
                                                </div>                                    
                                            </div>
		                            
                                            <div class="form-group clearfix">
                                                <label class="col-md-2 control-label">Tanggal Cuti</label>
                                                <div class="col-lg-6">
                                                    <div class="input-daterange input-group" id="date-range">
                                               
                                                        <input type="text" class="form-control" name="tglMulai" onChange={this.handleChange} placeholder="DD/MM/YYYY" />
                                                    
                                                            <span class="input-group-addon bg-custom b-0 text-white"> sampai </span>
                                                        <input type="text" class="form-control" name="tglAkhir"onChange={this.handleChange}  placeholder="DD/MM/YYYY" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group clearfix">
                                                <label class="col-md-2 control-label">Keterangan Cuti</label>
                                                <div class="col-md-6">
                                                    <textarea class="form-control" name="keterangan" onChange={this.handleChange} rows="6"></textarea>
                                                </div>
                                            </div>

                                            <div class="form-group clearfix">
                                                <a class="col-md-2 control-label"   />
                                                <div class="col-sm-2 control-label">
                                                </div>
                                            </div>
                                            
                                            <div class="form-group clearfix">
                                                <label  class="col-sm-6 control-label"></label>
                                                <div class="col-sm-2 control-label">
                                                    <button type="submit" class="btn btn-success waves-effect waves-light m-l-10 btn-md"> Submit</button>
                                                </div>
                                            </div>
                                            
                                        </form>
	                                        
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

  
  export default FormPengajuan;
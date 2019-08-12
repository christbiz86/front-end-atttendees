import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FormPengajuan extends Component {
    constructor(props){
        super(props);

        this.handleApprove = this.handleApprove.bind(this);

        this.state = {
            no:'',                       
            nama:'',
            posisi:'',
            unit:'',
            tglMulai:'',
            tglSelesai:'',
            keterangan:'',
            tertuju:'',
            status :''
        }    
    }
    
    handleApprove = event => {
        event.preventDefault();
        this.Approve();
    };

    Approve(){
        fetch('http://192.168.1.112:8181/approval', {
                method: 'POST',
                body: JSON.stringify(this.state.status='approve'),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response),
            
                <NavLink to ="/"></NavLink>
             
            ); 
    }

    GetPengajuan(){
        fetch('http://192.168.1.112:8181/approval', {
                method: 'GET',
                body: JSON.stringify(this.state.status='approve'),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response),
            
                <NavLink to ="/"></NavLink>
             
            ); 
    }

    render() {
        
        return (
				<div class="content">
					{/* <div class="container"> */}

						{/* <!-- Page-Title --> */}
						<div class="row">
							<div class="col-sm-12">

								<h4 class="page-title">Form Pengajuan Cuti</h4>
								<ol class="breadcrumb">
									<li>
										<a href="#">Cuti</a>
									</li>
									<li class="active">
										Pengajuan
									</li>
								</ol>
							</div>
						</div>

                        
                        <div class="row">
                        	<div class="col-sm-12">
                        		<div class="card-box">
                        			<h4 class="m-t-0 header-title"><b>PENGAJUAN CUTI</b></h4>
                        			<p class="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>
                        			<div class="row">
                        				<div class="col-md-6">
                        					<form class="form-horizontal" role="form">                                    
	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label" >NIK</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" id="nik" name="nik" class="form-control" placeholder="NIK"/>
	                                                </div>
	                                            </div>
                                                <div class="form-group">
	                                                <label class="col-md-2 control-label" >Nama</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" id="nama" name="nama" class="form-control" placeholder="Nama"/>
	                                                </div>
	                                            </div>
                                                <div class="form-group">
	                                                <label class="col-md-2 control-label" >Posisi</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" id="posisi" name="posisi" class="form-control" placeholder="Posisi"/>
	                                                </div>
	                                            </div>

                                                <div class="form-group">
	                                                <label class="col-md-2 control-label" >Unit</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" id="unit" name="unit" class="form-control" placeholder="Unit"/>
	                                                </div>
	                                            </div>

			                                	<form action="#" class="form-horizontal">
                                                    <div class="form-group">
                                                        <label class="col-md-2 control-label">Tanggal Cuti</label>
                                                        <div class="col-sm-10">
                                                            <div class="input-daterange input-group" id="date-range">
                                                                <input type="text" class="form-control" name="start" placeholder="YYYY/MM/DD" />
                                                                <span class="input-group-addon bg-custom b-0 text-white"> sampai </span>
                                                                <input type="text" class="form-control" name="end" placeholder="YYYY/MM/DD" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div class="form-group">
	                                                <label class="col-md-2 control-label">Keterangan Cuti</label>
	                                                <div class="col-md-10">
	                                                    <textarea class="form-control" rows="6"></textarea>
	                                                </div>
	                                            </div>
                                                <button type="submit" class="btn btn-success waves-effect waves-light m-l-10 btn-md"> Submit</button>
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


import React, { Component } from "react";
<<<<<<< HEAD
import Layout from '../../layout/Layout';

let token = localStorage.getItem('token');
class AnnualRequest extends Component {    
    constructor(props){
        super(props);

        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.state = {
            listRequest: []
=======
import Moment from "moment";

class AnnualRequest extends Component {    
    constructor(props){
        super(props);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.state = {
            annual:"",
            listRequest: [],
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d

        };
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    handleApprove = event => {
        event.preventDefault();   
        this.Approve(event);
    };

    handleReject = event => {
        event.preventDefault();   
        this.Reject(event);
    };

    Approve(event){
        const { value } = event.target;
<<<<<<< HEAD
        fetch('http://localhost:8282/request/Approved', {
=======
        fetch('http://localhost:8080/request/Approved', {
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                method: 'PATCH',
                body: 
                    JSON.stringify(this.state.listRequest[value])
                ,
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

    Reject(event){
        const { value } = event.target;
<<<<<<< HEAD
        fetch('http://localhost:8181/request/Rejected', {
=======
        fetch('http://localhost:8080/request/Rejected', {
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                method: 'PATCH',
                body: 
                    JSON.stringify(this.state.listRequest[value])
                ,
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

    componentDidMount() {
<<<<<<< HEAD
        fetch('http://localhost:8181/request/Request', {
                method: 'GET',
                
=======
        fetch('http://localhost:8080/request/Request', {
                method: 'GET',
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => res.json())
            .then(listRequest => this.setState({
                listRequest
            }))
            .catch(error => console.log('parsing failed', error))
            
            
    }

    render() {
        const {listRequest } = this.state;

        return (
<<<<<<< HEAD
            <div>
            <Layout />
            <div className="content-page">

				<div className="content">
                    <div className="container">

						<div className="row">
							<div className="col-sm-12">

								<h4 className="page-title">Request Annual</h4>
								<ol className="breadcrumb">
									<li>
										<a href="#">Annual</a>
									</li>
									<li className="active">
=======
            <div className="content-page">

				<div class="content">
                    <div class="container">

						<div class="row">
							<div class="col-sm-12">

								<h4 class="page-title">Request Annual</h4>
								<ol class="breadcrumb">
									<li>
										<a href="#">Annual</a>
									</li>
									<li class="active">
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
										request
									</li>
								</ol>
							</div>
						</div>

                        
<<<<<<< HEAD
                        <div className="row">
                        	<div className="col-md-12">
                        		<div className="card-box">

                                    <div className="form-group clearfix">
                                        <label className="col-sm-2 control-label" ></label>
                                        <div className="col-lg-6">
                                            <h4 className="m-t-0 header-title"><b>PERMINTAAN CUTI</b></h4>    
                                        </div>
                                    </div>
                        			<p className="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                    <div className="table-rep-plugin">
                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" className="table  table-striped">
=======
                        <div class="row">
                        	<div class="col-md-12">
                        		<div class="card-box">

                                    <div class="form-group clearfix">
                                        <label class="col-sm-2 control-label" ></label>
                                        <div class="col-lg-6">
                                            <h4 class="m-t-0 header-title"><b>PERMINTAAN CUTI</b></h4>    
                                        </div>
                                    </div>
                        			<p class="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                    <div class="table-rep-plugin">
                                    <div class="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" class="table  table-striped">
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                                            <thead>
                                                
                                                <tr>
                                                    <th data-priority="1">NIK</th>
                                                    <th data-priority="2">Nama</th>
<<<<<<< HEAD
=======
                                                    <th data-priority="3">Posisi</th>
                                                    <th data-priority="4">Unit</th>
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                                                    <th data-priority="5">Tanggal Mulai</th>
                                                    <th data-priority="6">Tanggal Selesai</th>
                                                    <th data-priority="7">Status</th>
                                                    <th></th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>                                                     

                                                {
                                                    listRequest.length >0 ? listRequest.map((annual,index)=> {
                                                        return (
                                                            <tr>
                                                                <th data-priority="1">{annual.user.kode}</th>
                                                                <th data-priority="2">{annual.user.nama}</th>
<<<<<<< HEAD
=======
                                                                <th data-priority="3">Posisi</th>
                                                                <th data-priority="4">Unit</th>
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                                                                <th data-priority="5">{annual.tglMulai}</th>
                                                                <th data-priority="6">{annual.tglAkhir}</th>
                                                                <th data-priority="7">{annual.status.status}</th>
                                                                <th>
<<<<<<< HEAD
                                                                    <button type="submit" name ="approve" id="sa-warning" className="btn btn-primary waves-effect waves-light m-l-10 btn-sm"
                                                                     value={index} onClick={this.handleApprove}>
                                                                         <b className="font-bold">Setujui</b></button>                                                            
                                                                    <button type="submit" name="reject" id="sa-warning" className="btn btn-danger waves-effect waves-light m-l-10 btn-sm" value={index} onClick={this.handleReject}><b className="font-bold" >Tolak</b></button>
=======
                                                                    <button type="submit" name ="approve" class="btn btn-primary waves-effect waves-light m-l-10 btn-sm" value={index} onClick={this.handleApprove}>
                                                                         <b className="font-bold">Setujui</b></button>                                                            
                                                                    <button type="submit" name="reject" class="btn btn-danger waves-effect waves-light m-l-10 btn-sm" value={index} onClick={this.handleReject}><b className="font-bold" >Tolak</b></button>
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                                                                </th>
                                                            </tr>    
        
                                                        )
                                                    }):null
                                                }
                                            </tbody>
                                        </table>
                                        </div>

                                    </div>
	                                        
                        				</div>                        				
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                </div>
=======
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                        
        );
        
    }
}

  
<<<<<<< HEAD
export default AnnualRequest;
=======
  export default AnnualRequest;
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d

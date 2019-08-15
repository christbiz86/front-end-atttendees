import React, { Component } from "react";
import Moment from "moment";
import Layout from '../../layout/Layout';

class AnnualRequest extends Component {    
    constructor(props){
        super(props);

        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.state = {
            listRequest: []

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
        fetch('http://localhost:8181/request/Approved', {
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
        fetch('http://localhost:8181/request/Rejected', {
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
        fetch('http://localhost:8181/request/Request', {
                method: 'GET',
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
            <div>
            <Layout />
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
										request
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
                                            <h4 class="m-t-0 header-title"><b>PERMINTAAN CUTI</b></h4>    
                                        </div>
                                    </div>
                        			<p class="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                    <div class="table-rep-plugin">
                                    <div class="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" class="table  table-striped">
                                            <thead>
                                                
                                                <tr>
                                                    <th data-priority="1">NIK</th>
                                                    <th data-priority="2">Nama</th>
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
                                                                <th data-priority="5">{annual.tglMulai}</th>
                                                                <th data-priority="6">{annual.tglAkhir}</th>
                                                                <th data-priority="7">{annual.status.status}</th>
                                                                <th>
                                                                    <button type="submit" name ="approve" class="btn btn-primary waves-effect waves-light m-l-10 btn-sm"
                                                                     value={index} onClick={this.handleApprove}>
                                                                         <b className="font-bold">Setujui</b></button>                                                            
                                                                    <button type="submit" name="reject" class="btn btn-danger waves-effect waves-light m-l-10 btn-sm" 
                                                                    value={index} onClick={this.handleReject}>
                                                                        <b className="font-bold" >Tolak</b></button>
                                                                    
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
                </div>
                        
        );
        
    }
}

  
  export default AnnualRequest;
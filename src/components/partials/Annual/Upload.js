import React, { Component } from "react";
import Layout from '../../layout/Layout';

let token = localStorage.getItem('token');

class Upload extends Component {    
    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
       
        this.Request(formData);
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    
    Request(formData){

        fetch('http://api.attendees.today/upload', {
                method: 'POST',
                body:formData
                ,
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response)        
            ); 
    }

    render() { 
        
        return (
            <div>
            <Layout />
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

                                <form id="basic-form" enctype="multipart/form-data" onSubmit={this.onFormSubmit} >   
                                            
                                    <div className="form-group clearfix">
                                        <label className="col-sm-2 control-label" >NIK</label>
                                        <div className="col-lg-6">
                                            <input type="file" data-buttonname="btn-primary" name="myImage" onChange= {this.onChange}  placeholder="foto"/>                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-default waves-effect waves-light btn-lg" id="sa-warning"> Submit</button>
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
export default Upload;
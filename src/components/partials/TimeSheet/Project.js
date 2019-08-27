import React, { Component } from 'react';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            kode: '',
            namaProject: '',
            lokasi: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();

        const data = { 
            kode: this.state.kode, 
            namaProject: this.state.namaProject,
            lokasi: this.state.lokasi
        }

        fetch('http://http://localhost:8080/api/project', { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    render(){
        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        {/* Page Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Project</h4>
                                <ol className="breadcrumb">
									<li>
										<a>Attendee</a>
									</li>
									<li>
										<a>Time Sheet</a>
									</li>
									<li class="active">
										Project
									</li>
								</ol>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-box">
            			            <h4 className="m-t-0 header-title"><b>Project Form</b></h4>
                                    <div class="row">
										<div class="col-lg-6">
                                            <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Code</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="kode" className="form-control" required placeholder="Project Code" onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Name</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="namaProject" className="form-control" required placeholder="Project Name" onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Location</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="lokasi" className="form-control" required placeholder="Project Location" onChange={this.handleChange} />
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
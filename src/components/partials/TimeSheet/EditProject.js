import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import * as Constant from '../../_helpers/constant';
const url = Constant.API_LIVE + '/api/project';

let token = localStorage.getItem('token');

class EditProject extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            id: this.props.location.data.id,
            kode: this.props.location.data.kode,
            namaProject: this.props.location.data.namaProject,
            lokasi: this.props.location.data.lokasi,
            status: this.props.location.data.status.status,
            createdBy: this.props.location.data.createdBy,
            updatedBy: this.props.location.data.updatedBy,
            createdAt: this.props.location.data.createdAt,
            updatedAt: this.props.location.data.updatedAt,
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
            id: this.state.id,
            kode: this.state.kode,
            namaProject: this.state.namaProject,
            lokasi: this.state.lokasi,
            status: {
                status: this.state.status
            },
            createdBy: this.state.createdBy,
            createdAt: this.state.createdAt,
        }

        fetch(Constant.API_LIVE + '/api/project', { 
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {res.json()
            if(res.ok){
                swal("Success!", "Data successfully updated!", "success")
                .then(function() {
                    window.location.href = "/timesheet/project";
                });
            }
            else {
                swal("Failed", "Update failed!", "error")
            }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    cancel() {
        window.location.href = "/timesheet/project"
    }

    render() {
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
                                        <a href="/">Attendee</a>
                                    </li>
                                    <li>
                                        <a href="#">Time Sheet</a>
                                    </li>
                                    <li>
                                        <a href="/timesheet/project">Project</a>
                                    </li>
                                    <li className="active">
                                        Edit Project
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-box">
            			            <h4 className="m-t-0 header-title"><b>Edit Form</b></h4>
                                    <div className="row">
										<div className="col-lg-6">
                                            <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Project Code</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="kode" defaultValue={this.state.kode} className="form-control" readOnly onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Project Name</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="namaProject" defaultValue={this.state.namaProject} className="form-control" required onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Project Location</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="lokasi" defaultValue={this.state.lokasi} className="form-control" required onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Status</label>
                                                    {/* <select class="selectpicker" data-style="btn-white">
                                                        <option defaultValue="1ead5a90-5005-4566-bad3-2ab977acec8f" name="status" required onChange={this.handleChange}>Active</option>
                                                        <option defaultValue="9916d4e4-2cbf-4569-a631-bfbd7d16b3e7" name="status" required onChange={this.handleChange}>Inactive</option>
                                                    </select> */}
                                                    <div class="radio radio-info radio-inline">
                                                        <input type="radio" id="inlineRadio1" value="Active" name="status" onClick={this.handleChange} />
                                                        <label for="inlineRadio1"> Active </label>
                                                    </div>
                                                    <div class="radio radio-inline">
                                                        <input type="radio" id="inlineRadio2" value="Inactive" name="status" onClick={this.handleChange} />
                                                        <label for="inlineRadio2"> Inactive </label>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="col-sm-offset-3 col-sm-9 m-t-15">
                                                        <button type="submit" className="btn btn-primary">
                                                            Submit
                                                        </button>
                                                        <button type="reset" className="btn btn-default m-l-5">
                                                            Reset
                                                        </button>
                                                        {/* <button type="button" className="btn btn-default m-l-5" onClick={this.cancel()}>
                                                            Cancel
                                                        </button> */}
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

export default EditProject;
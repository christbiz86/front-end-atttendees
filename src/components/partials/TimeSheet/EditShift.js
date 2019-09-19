import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import swal from 'sweetalert';
import * as Constant from '../../_helpers/constant';
const url = Constant.API_LIVE + '/api/shift';

let token = localStorage.getItem('token');

class EditShift extends Component {
    constructor(props){
        super(props);

        this.handlePut = this.handlePut.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            id: this.props.location.data.id,
            kode: this.props.location.data.shiftProject.shift.kode,
            masuk: Moment(this.props.location.data.masuk, Moment.HTML5_FMT.TIME_SECONDS),
            pulang: Moment(this.props.location.data.pulang, Moment.HTML5_FMT.TIME_SECONDS),
            status: this.props.location.data.shiftProject.shift.status.status,
            createdBy: this.props.location.data.shiftProject.shift.createdBy.id,
            updatedBy: this.props.location.data.shiftProject.shift.updatedBy,
            createdAt: this.props.location.data.shiftProject.shift.createdAt,
            updatedAt: this.props.location.data.shiftProject.shift.updatedAt,
            getProject: this.props.location.data.shiftProject.project
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handlePut = event =>{
        event.preventDefault();

        const data = {
            id: this.state.id,
            kode: this.state.kode,
            masuk: this.state.masuk,
            pulang: this.state.pulang,
            status: {
                status: this.state.status
            },
            createdBy: {
                id: this.state.createdBy
            },
            createdAt: this.state.createdAt,
        }

        fetch(Constant.API_LIVE + '/api/shift', { 
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
                    window.location.href = "/timesheet/shift";
                });
            }
            else {
                swal("Failed", "Update failed!", "error")
            }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    fetchProject = async() => {
        await axios.get(Constant.API_LIVE+ '/api/project')
        .then(response => response.data)
        .then(data => {
            this.setState({
                getProject: data,
                project: data.id
            })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false })
        });
    }

    componentDidMount() {
        this.fetchProject();
    }

    render() {
        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        {/* Page Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Shift</h4>
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="/">Attendee</a>
                                    </li>
                                    <li>
                                        <a href="#">Time Sheet</a>
                                    </li>
                                    <li>
                                        <a href="/timesheet/shift">Shift</a>
                                    </li>
                                    <li className="active">
                                        Edit Shift
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
                                            <form className="form-horizontal group-border-dashed" onSubmit={this.handlePut}>
                                                {/* <div className="form-group">
                                                    <label className="col-md-2 control-label">Shift Code</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="kode" defaultValue={this.state.kode} className="form-control" readOnly onChange={this.handleChange} />
                                                    </div>
                                                </div> */}

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Check In</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                            <input type="time" step="1" name="masuk" defaultValue={this.state.masuk} className="form-control" required onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Check Out</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group clockpicker" data-placement="top" data-align="top" data-autoclose="true">
                                                            <input type="time" step="1" name="pulang" defaultValue={this.state.pulang} className="form-control" required onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Status</label>
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

export default EditShift;
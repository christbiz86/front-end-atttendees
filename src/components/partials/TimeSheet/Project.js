import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import * as Constant from '../../_helpers/constant';
const url = Constant.API_LIVE + '/api/project';

let token = localStorage.getItem('token');

class Project extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            kode: '',
            namaProject: '',
            lokasi: '',
            status: '',
            createdBy: '',
            updatedBy: '',
            createdAt: '',
            updatedAt: '',

            isLoading: true,
            project: [],
            error: null
        }
    }

    componentDidMount = async() => {
        await axios.request(Constant.API_LIVE + '/api/project', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.data)
        .then(data => {
            // console.log(data);
            // if (err) throw err;
            this.setState({ posts: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false })
            // console.log(this.state.tableRows);
        });
    }

    assemblePosts= () => {
        let posts = this.state.posts.map((post, i) => {
            return ({
                code: post.kode,
                name: post.namaProject,
                loc: post.lokasi,
                status: post.status.status,
                action: <Link to={{pathname: "/timesheet/edit-project", data: post}} className="btn btn-warning" ><i className="fa fa-pencil"></i></Link>
            })
        });
        console.log(posts);
        return posts;
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();

        const data = {
            namaProject: this.state.namaProject,
            lokasi: this.state.lokasi
        }

        fetch(Constant.API_LIVE + '/api/project', { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {res.json()
            if(res.ok){
                swal("Success!", "Data successfully added!", "success")
                .then(function() {
                    window.location.href = "/timesheet/project";
                });
            }
            else {
                swal("Failed", "Insert failed!", "error")
            }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    render(){
        const { open } = this.state;
        const data = {
            columns: [
                {
                    label:'Project Code',
                    field:'code',
                },
                {
                    label:'Project Name',
                    field:'name',
                },
                {
                    label:'Location',
                    field:'loc',
                },
                {
                    label:'Status',
                    field:'status',
                },
                {
                    label:'Action',
                    field:'action',
                }
            ],
            rows:this.state.tableRows,
        }

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
                                <ul className="nav nav-tabs tabs">
                                    <li className="active tab">
                                        <a href="#project-list" data-toggle="tab" aria-expanded="false"> 
                                            <span className="visible-xs"><i className="fa fa-home"></i></span> 
                                            <span className="hidden-xs">Project List</span> 
                                        </a> 
                                    </li>
                                    <li className="tab">
                                        <a href="#insert-form" data-toggle="tab" aria-expanded="true">
                                            <span className="visible-xs"><i className="fa fa-envelope-o"></i></span>
                                            <span className="hidden-xs">Insert Form</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="card-box" id="insert-form">
            			            <h4 className="m-t-0 header-title"><b>Project Form</b></h4>
                                    <div class="row">
										<div class="col-lg-6">
                                            <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
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

                                <div className="card-box table-responsive" id="project-list">
            			            <h4 className="m-t-0 header-title"><b>Project List</b></h4>
                                    <MDBDataTable striped bordered hover data={data} />
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
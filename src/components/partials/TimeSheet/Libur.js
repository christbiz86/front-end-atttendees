import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import Moment from 'moment';
import * as Constant from '../../_helpers/constant';
const url = Constant.API_LIVE + '/attendees/libur';

let token = localStorage.getItem('token');

class Libur extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            nama: '',
            tglMulai: Moment('', Moment.ISO_8601),
            tglAkhir: Moment('', Moment.ISO_8601),
            status: '',
            createdBy: '',
            updatedBy: '',
            createdAt: '',
            updatedAt: '',

            isLoading: true,
            libur: [],
            error: null
        }
    }

    assemblePosts= () => {
        let posts = this.state.posts.map((post, i) => {
            return ({
                name: post.nama,
                start: post.tglMulai,
                end: post.tglAkhir,
                status: post.status.status,
                action: <div>
                    <Link to={{pathname: "/timesheet/edit-libur", data: post}} className="btn btn-warning" ><i className="fa fa-pencil"></i></Link>
                </div>
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
            nama: this.state.nama, 
            tglMulai: this.state.tglMulai,
            tglAkhir: this.state.tglAkhir,
        }

        fetch(Constant.API_LIVE + '/attendees/libur', { 
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
                    window.location.href = "/timesheet/libur";
                });
            }
            else {
                swal("Failed", "Insert failed!", "error")
            }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    fetchLibur = async() => {
        await axios.get(Constant.API_LIVE + '/attendees/libur', {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({ posts: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false })
        });
    }

    componentDidMount() {
        this.fetchLibur();
    }

    render(){
        const { open } = this.state;
        const data = {
            columns: [
                {
                    label:'Holiday Name',
                    field:'name',
                },
                {
                    label:'Start Date',
                    field:'start',
                },
                {
                    label:'End Date',
                    field:'end',
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
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Holiday</h4>
                                <ol className="breadcrumb">
									<li>
										<a>Attendee</a>
									</li>
									<li>
										<a>Time Sheet</a>
									</li>
									<li class="active">
										Holiday
									</li>
								</ol>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="nav nav-tabs tabs">
                                    <li className="active tab">
                                        <a href="#libur-list" data-toggle="tab" aria-expanded="false"> 
                                            <span className="visible-xs"><i className="fa fa-home"></i></span> 
                                            <span className="hidden-xs">Holiday List</span> 
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
            			            <h4 className="m-t-0 header-title"><b>Holiday Form</b></h4>
                                    <div class="row">
										<div class="col-lg-6">
                                            <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Holiday Name</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="nama" className="form-control" required placeholder="Name" onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Date</label>
                                                    <div className="col-md-8">
                                                        <div class="input-daterange input-group">
                                                            <input type="date" class="form-control" required name="tglMulai" onChange={this.handleChange} />
                                                            <span class="input-group-addon bg-custom b-0 text-white">to</span>
                                                            <input type="date" class="form-control" required name="tglAkhir" onChange={this.handleChange} />
                                                        </div>
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

                                <div className="card-box table-responsive" id="libur-list">
            			            <h4 className="m-t-0 header-title"><b>Holiday List</b></h4>
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

export default Libur;
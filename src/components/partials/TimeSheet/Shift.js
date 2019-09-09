import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import Moment from 'moment';
import * as Constant from '../../_helpers/constant';
// const url = Constant.API_LIVE + '/api/shift';

let token = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user'));

class Shift extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            id: null,
            kode: null,
            masuk: Moment('', Moment.HTML5_FMT.TIME_SECONDS),
            pulang: Moment('', Moment.HTML5_FMT.TIME_SECONDS),
            status: null,
            createdBy: null,
            updatedBy: null,
            createdAt: null,
            updatedAt: null,
            project: null,
            getProject: [],
            worktime: null,
            idUser: null,
            idCompany: user.idCompanyUnitPosisi.idCompany.id,
            namaProject: null,
            lokasi: null,
            userShiftProject: [],
            usp: [],

            create: true,

            isLoading: true,
            shift: [],
            error: null,

            posts: [],
            tableRows: [],

            open: false,
            selectedPost: null // Keep track of the selected post
        }
    }

    onOpenModal = i => {
        this.setState({ 
            open: true,
            selectedPost: i // When a post is clicked, mark it as selected
         });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    // componentWillMount = async() => {
    //     await axios.get(Constant.API_LIVE + '/api/shift')
    //     .then(response => response.data)
    //     .then(data => {
    //         // console.log(data);
    //         // if (err) throw err;
    //         this.setState({ posts: data })
    //     })
    //     .then(async() => {
    //         this.setState({ tableRows:this.assemblePosts(), isLoading:false })
    //         // console.log(this.state.tableRows);
    //     });
    // }

    // fetchShift() {
    //     fetch(Constant.API_LIVE + '/api/shift', {
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data =>
    //         this.setState({
    //             shift: data,
    //             isLoading: false,
    //         }),
    //     ).catch(error => this.setState({ error, isLoading: false }));
    // }

    fetchProject (){
        fetch(Constant.API_LIVE + '/api/project',{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                getProject: data,
                project: data[0].id,
                isLoading:false
            })
        });
    }

    fetchData = async() => {
        const usp = {
            userCompany: {
                idUser: {
                    id: this.state.idUser
                },
                idCompanyUnitPosisi: {
                    idCompany: {
                        id: this.state.idCompany
                    }
                }
            },
            shiftProject: {
                shift: {
                    masuk: this.state.masuk,
                    pulang: this.state.pulang,
                    status: {status: this.state.status}
                },
                project: {
                    namaProject: this.state.namaProject,
                    lokasi: this.state.lokasi,
                    status: {status: this.state.status}
                }
            },
            worktime: {
                status: this.state.worktime
            }
        }
        await axios.post(Constant.API_LIVE+ '/api/shift/filter',usp, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({
                userShiftProject: data,
            })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false })
        });
        console.log(this.data);
    }

    assemblePosts= () => {
        const { userShiftProject } = this.state;
        let usp = userShiftProject.map((post) => {
            return ({
                in: post.shiftProject.shift.masuk,
                out: post.shiftProject.shift.pulang,
                namaProject: post.shiftProject.project.namaProject,
                lokasi: post.shiftProject.project.lokasi,
                worktime: post.worktime.status,
                status: post.shiftProject.shift.status.status,
                action: <div>
                    {/* <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-toggle="modal" 
                        data-target="#myModal" 
                        key={post.id} 
                        onClick={() => this.onOpenModal(i)}
                    >
                        <i className="fa fa-pencil"></i>
                    </button>
                    &nbsp; */}
                    <Link to={{pathname: "/timesheet/edit-shift", data: post}} className="btn btn-warning" ><i className="fa fa-pencil"></i></Link>
                    {/* &nbsp; */}
                    {/* <button type="button" value={post} onClick={this.handleInactive(post)} className="btn btn-primary">Edit</button> */}
                </div>
            })
        });
        // console.log(usp);
        return usp;
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            masuk: this.state.masuk,
            pulang: this.state.pulang,
            project: {
                id: this.state.project
            },
            worktime: {
                status: this.state.worktime
            }
        }

        fetch(Constant.API_LIVE + '/api/shift', { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {res.json()
            if(res.ok){
                swal("Success!", "Data successfully added!", "success")
                .then(function() {
                    window.location.href = "/timesheet/shift";
                });
            }
            else {
                swal("Failed", "Insert failed!", "error")
            }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response/*, console.log(data.masuk, data.pulang)*/));
    }

    handleInactive(shift) {
        // event.preventDefault();

        // const data = {
        //     id: this.state.id,
        //     kode: this.state.kode,
        //     masuk: this.state.masuk,
        //     pulang: this.state.pulang,
        //     status: {
        //         idStatus: this.state.idStatus
        //     },
        //     createdAt: this.state.createdAt,
        //     createdBy: this.state.createdBy,

        // }

        fetch(Constant.API_LIVE + '/api/shift/inactive', { 
            method: 'PATCH',
            body: JSON.stringify(shift),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)/*, console.log(shift)*/);
    }

    // renderModal = () => {
    //     // Check to see if there's a selected post. If so, render it.
    //     if (this.state.selectedPost !== null) {
    //         const post = this.state.posts[this.state.selectedPost];
    //         return (
    //             <div className="modal-dialog modal-dialog-centered">
    //                 <form onSubmit={this.handlePut} key={post.id}>
    //                     <div className="modal-body">
    //                         <div className="row"> 
    //                             <div className="col-md-12"> 
    //                                 <div className="form-group"> 
    //                                     <input type="text" name="id" className="form-control" defaultValue={this.props.location.data.id} onChange={this.handleChange} />
    //                                 </div>

    //                                 <div className="form-group"> 
    //                                     <input type="text" name="idStatus" className="form-control" defaultValue={'{"id": "'+post.status.id+'"}'} onChange={this.handleChange} />
    //                                 </div>

    //                                 <div className="form-group"> 
    //                                     <input type="text" name="createdAt" className="form-control" defaultValue={post.createdAt} onChange={this.handleChange} />
    //                                 </div>

    //                                 <div className="form-group"> 
    //                                     <input type="text" name="createdBy" className="form-control" defaultValue={'{"id": "'+post.createdBy.id+'"}'} onChange={this.handleChange} />
    //                                 </div>

    //                                 <div className="form-group"> 
    //                                     <label htmlFor="field-3" className="control-label">Shift Code</label> 
    //                                     <input type="text" className="form-control" defaultValue={post.kode} /* onChange={this.handleChange} */ ref={this.kodekode} disabled />
    //                                 </div>
    //                             </div> 
    //                         </div>
    //                         <div className="row"> 
    //                             <div className="col-md-6"> 
    //                                 <div className="form-group"> 
    //                                     <label htmlFor="field-1" className="control-label">Clock In</label> 
    //                                     <div className="input-group clockpicker" data-placement="top" data-align="top" data-autoclose="true">
    //                                         <input type="time" step="1" name="masuk" className="form-control" defaultValue={post.masuk} /* onChange={this.handleChange} */ ref={this.clockin} />
    //                                         <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
    //                                     </div>
    //                                 </div>
    //                             </div> 
    //                             <div className="col-md-6"> 
    //                                 <div className="form-group"> 
    //                                     <label htmlFor="field-2" className="control-label">Clock Out</label> 
    //                                     <div className="input-group clockpicker" data-placement="top" data-align="top" data-autoclose="true">
    //                                         <input type="time" step="1" name="pulang" className="form-control" defaultValue={post.pulang} /* onChange={this.handleChange} */ ref={this.clockout} />
    //                                         <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
    //                                     </div>
    //                                 </div> 
    //                             </div> 
    //                         </div>
    //                     </div>

    //                     <div className="modal-footer">
    //                         <button type="submit" className="btn btn-info waves-effect waves-light">Save changes</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         );
    //     }
    // }

    componentDidMount() {
        // this.fetchShift();
        this.fetchProject();
        this.fetchData();
    }

    render(){
        const { open } = this.state;
        const data = {
            columns: [
                // {
                //     label:'Shift Code',
                //     field:'code',
                // },
                {
                    label:'Check In',
                    field:'in',
                },
                {
                    label:'Check Out',
                    field:'out',
                },
                // {
                //     label:'Status',
                //     field:'status',
                // },
                {
                    label:'Project Name',
                    field:'namaProject',
                },
                {
                    label:'Location',
                    field:'lokasi',
                },
                {
                    label:'Worktime',
                    field:'worktime',
                },
                {
                    label:'Shift Status',
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
                                <h4 className="page-title">Shift</h4>
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="#">Attendee</a>
                                    </li>
                                    <li>
                                        <a href="#">Time Sheet</a>
                                    </li>
                                    <li className="active">
                                        Shift
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="nav nav-tabs tabs">
                                    <li className="active tab">
                                        <a href="#shift-list" data-toggle="tab" aria-expanded="false"> 
                                            <span className="visible-xs"><i className="fa fa-home"></i></span> 
                                            <span className="hidden-xs">Shift List</span> 
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
            			            <h4 className="m-t-0 header-title"><b>Insert Form</b></h4>
                                    <div className="row">
										<div className="col-lg-6">
                                            <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Check In</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                            <input type="time" step="1" name="masuk" className="form-control" required onChange={this.handleChange} />
                                                            <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Check Out</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group clockpicker" data-placement="top" data-align="top" data-autoclose="true">
                                                            <input type="time" step="1" name="pulang" className="form-control" required onChange={this.handleChange} />
                                                            <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Project Name</label>
                                                    <select className="selectpicker" data-style="btn-white" defaultValue={this.state.getProject.indexOf(0)} name="namaProject" onChange={this.handleChange} >
                                                        {/* {this.state.error ? <p>{this.state.error.message}</p> : null} */}
                                                        {!this.state.isLoading ? (
                                                            this.state.getProject.map(pro => {
                                                                console.log(pro.namaProject);
                                                                return (
                                                                    <option key={pro.id} value={pro.id}>{pro.namaProject}</option>
                                                                );
                                                            
                                                            })
                                                        ) : (
                                                            <h3>Loading...</h3>
                                                        )}
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Worktime</label>
                                                    <div class="radio radio-info radio-inline">
                                                        <input type="radio" id="inlineRadio1" value="Flexible" name="worktime" onClick={this.handleChange} />
                                                        <label for="inlineRadio1"> Flexible </label>
                                                    </div>
                                                    <div class="radio radio-inline">
                                                        <input type="radio" id="inlineRadio2" value="Standard" name="worktime" onClick={this.handleChange} />
                                                        <label for="inlineRadio2"> Standard </label>
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

                                <div className="card-box table-responsive" id="shift-list">
            			            <h4 className="m-t-0 header-title"><b>Shift List</b></h4>
                                    <MDBDataTable striped bordered hover data={data} />
                                </div>

                                <div>
                                    {/* <Modal open={open} onClose={this.onCloseModal} center>
                                        <h3>Edit Shift</h3>
                                        <div>{this.renderModal()}</div>
                                    </Modal> */}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shift;
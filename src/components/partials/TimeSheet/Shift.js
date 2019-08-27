import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Modal from 'react-responsive-modal';
import axios from 'axios';
const url = 'http://localhost:8080/api/shift';

class Shift extends Component {
    constructor(props){
        super(props);
        this.state = {
            kode: '',
            masuk: '',
            pulang: '',
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
    
    componentWillMount=async() => {
        await axios.get(url)
        .then(response => response.data)
        .then(data => {
            // console.log(data);
            // if (err) throw err;
            this.setState({ posts: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false })
            console.log(this.state.tableRows);
        });
    }

    assemblePosts= () => {
        let posts =this.state.posts.map((post, i) => {
            return ({
                code: post.kode,
                in: post.masuk,
                out: post.pulang,
                status: post.status.status,
                action: 
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-toggle="modal" 
                        data-target="#myModal" 
                        key={post.id} 
                        onClick={() => this.onOpenModal(i)}
                    >
                       <i className="fa fa-pencil"></i>
                    </button>
            })
        });
        return posts;
    }

    renderModal = () => {
        // Check to see if there's a selected post. If so, render it.
        if (this.state.selectedPost !== null) {
            const post = this.state.posts[this.state.selectedPost];
            return (
                // <div>
                //     <h4>{post.id}</h4>
                //     <h4>{post.kode}</h4>
                //     <h4>{post.masuk}</h4>
                //     <h4>{post.pulang}</h4>
                //     <h4>{post.status.status}</h4>
                // </div>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-body">
                        <div className="row"> 
                            <div className="col-md-12"> 
                                <div className="form-group"> 
                                    <label for="field-3" className="control-label">Shift Code</label> 
                                    <input type="text" name="kode" className="form-control" defaultValue={post.kode} onChange={this.handleChange}/>
                                </div>
                            </div> 
                        </div>
                        <div className="row"> 
                            <div className="col-md-6"> 
                                <div className="form-group"> 
                                    <label for="field-1" className="control-label">Clock In</label> 
                                    <div className="input-group clockpicker" data-placement="top" data-align="top" data-autoclose="true">
                                        <input type="text" name="masuk" className="form-control" defaultValue={post.masuk} onChange={this.handleChange} />
                                        <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-md-6"> 
                                <div className="form-group"> 
                                    <label for="field-2" className="control-label">Clock Out</label> 
                                    <div className="input-group clockpicker" data-placement="top" data-align="top" data-autoclose="true">
                                        <input type="text" name="pulang" className="form-control" defaultValue={post.pulang} onChange={this.handleChange} />
                                        <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-info waves-effect waves-light" value="Submit">Save changes</button>
                    </div>
                </div>
            );
        }
    }

    fetchShift() {
        fetch('http://localhost:8080/api/shift')
        .then(response => response.json())
        .then(data =>
            this.setState({
                shift: data,
                isLoading: false,
            })
        ).catch(error => this.setState({ error, isLoading: false }));
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
            masuk: this.state.masuk,
            pulang: this.state.pulang
        }

        fetch('http://http://localhost:8080/api/shift', { 
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

    componentDidMount() {
        this.fetchShift();
    }

    render(){
        const { open } = this.state;
        const data = {
            columns: [
                {
                    label:'Shift Code',
                    field:'code',
                },
                {
                    label:'Check In',
                    field:'in',
                },
                {
                    label:'Check Out',
                    field:'out',
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
                                                    <label className="col-md-2 control-label">Code</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="kode" className="form-control" required placeholder="Shift Code" onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Check In</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                            <input type="text" name="masuk" className="form-control" onChange={this.handleChange} />
                                                            <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Check Out</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group clockpicker" data-placement="top" data-align="top" data-autoclose="true">
                                                            <input type="text" name="pulang" className="form-control" onChange={this.handleChange} />
                                                            <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
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

                                <div className="card-box table-responsive" id="shift-list">
            			            <h4 className="m-t-0 header-title"><b>Shift List</b></h4>
                                    <MDBDataTable striped bordered hover data={data} />
                                </div>

                                <div>
                                    <Modal open={open} onClose={this.onCloseModal} center>
                                        <h3>Edit Shift</h3>
                                        <div>{this.renderModal()}</div>
                                    </Modal>
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
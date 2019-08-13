import React, { Component } from 'react';

class Shift extends Component {
    constructor(props){
        super(props);
        this.state = {
            kode: '',
            masuk: '',
            pulang: '',

            isLoading: true,
            shift: [],
            error: null
        }
    }

    fetchShift() {
        fetch('http://localhost:8080/api/shift')
        .then(response => response.json())
        .then(dataShift =>
            this.setState({
                shift: dataShift,
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
                                        <a href="#">TimeSheet</a>
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
                                                        {/* <div className="input-group m-b-15"> */}
                                                            {/* <div className="input-timepicker">
                                                                <input id="timepicker2" name="masuk" type="text" required className="form-control" onChange={this.handleChange} />
                                                            </div>
                                                            <span className="input-group-addon bg-custom b-0 text-white"><i className="glyphicon glyphicon-time"></i></span> */}
                                                            <div className="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                                <input type="text" name="masuk" className="form-control" value="13:14" onChange={this.handleChange} />
                                                                <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
                                                            </div>
                                                        {/* </div> */}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Check Out</label>
                                                    <div className="col-md-8">
                                                        {/* <div className="input-group m-b-15"> */}
                                                            {/* <div className="input-timepicker">
                                                                <input id="timepicker3" name="pulang" type="text" required className="form-control" onChange={this.handleChange} />
                                                            </div>
                                                            <span className="input-group-addon bg-custom b-0 text-white"><i className="glyphicon glyphicon-time"></i></span> */}
                                                            <div className="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                                <input type="text" name="pulang" className="form-control" value="13:14" onChange={this.handleChange} />
                                                                <span className="input-group-addon"> <span className="glyphicon glyphicon-time"></span> </span>
                                                            </div>
                                                        {/* </div> */}
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

                                {/* <div className="card-box" id="shift-list"> */}
                                <div className="panel" id="shift-list">
                                    <div className="panel-body">
            			            <h4 className="m-t-0 header-title"><b>Shift List</b></h4>
                                        <table className="table table-striped" id="datatable-editable">
                                            <thead>
                                                <tr>
                                                    <th>Shift Code</th>
                                                    <th>Check In</th>
                                                    <th>Check Out</th>
                                                    {/* <th>Status</th> */}
                                                    <th>Action</th>
                                                    {/* <th>{this.state.shift.map(s => 
                                                    s.kode
                                                    )}</th> */}
                                                </tr>
                                            </thead>

                                            {this.state.error ? <p>{this.state.error.message}</p> : null}
                                                {/* <tbody>
                                                    <tr className={this.state.shift}>
                                                        <td>{this.state.shift.kode}</td>
                                                        <td>{this.state.shift.masuk}</td>
                                                        <td>{this.state.shift.pulang}</td>
                                                        {/* <td>{this.state.shift.status.id}</td> */}
                                                        {/* <td className="actions">
                                                            <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                                            <a href="#" className="hidden on-editing remove-row"><i className="fa fa-save"></i></a>
                                                            <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                                            
                                                            <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody> */}
                                            {!this.state.isLoading ? (
                                                <tbody>
                                                    {this.state.shift.map(s => (
                                                        <tr>
                                                        <td>{s.kode}</td>
                                                        <td>Internet
                                                        Explorer 4.0
                                                        </td>
                                                        <td>Win 95+</td>
                                                        <td className="actions">
                                                        
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            ) : (
                                                <div>Loading...</div>
                                            )}
                                        </table>
                                    </div>
                                </div>
                                
                            </div>
                        </div> {/*  */}

                        {/* Modal */}
                        <div id="dialog" className="modal-block mfp-hide">
                            <section className="panel panel-info panel-color">
                                <header className="panel-heading">
                                    <h2 className="panel-title">Are you sure?</h2>
                                </header>
                                <div className="panel-body">
                                    <div className="modal-wrapper">
                                        <div className="modal-text">
                                            <p>Are you sure that you want to save this row?</p>
                                        </div>
                                    </div>

                                    <div className="row m-t-20">
                                        <div className="col-md-12 text-right">
                                            <button id="dialogConfirm" className="btn btn-primary waves-effect waves-light" type="submit" value="Submit">
                                                Confirm
                                            </button>
                                            &nbsp;
                                            <button id="dialogCancel" className="btn btn-default waves-effect">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Shift;
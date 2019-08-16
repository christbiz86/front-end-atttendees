import React, { Component } from 'react';
<<<<<<< HEAD
import Layout from '../../layout/Layout';

class Shift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kode: '',
            masuk: '',
            pulang: ''
        }
    }

    

    render(){
        return(
            <div>
                <Layout/>
                <div className="content-page">
                    <div className="content">
                        <div className="container">
                            {/* Page Title */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4 className="page-title">Shift</h4>
                                    <ol class="breadcrumb">
                                        <li>
                                            <a href="#">Attendee</a>
                                        </li>
                                        <li>
                                            <a href="#">TimeSheet</a>
                                        </li>
                                        <li class="active">
                                            Shift
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul class="nav nav-tabs tabs">
                                        <li class="active tab">
                                            <a href="#shift-list" data-toggle="tab" aria-expanded="false"> 
                                                <span class="visible-xs"><i class="fa fa-home"></i></span> 
                                                <span class="hidden-xs">Shift List</span> 
                                            </a> 
                                        </li>
                                        <li class="tab"> 
                                            <a href="#insert-form" data-toggle="tab" aria-expanded="true"> 
                                                <span class="visible-xs"><i class="fa fa-envelope-o"></i></span> 
                                                <span class="hidden-xs">Insert Form</span> 
                                            </a> 
                                        </li>
                                    </ul> 
                                    
                                    <div className="card-box" id="insert-form">
                                        <h4 className="m-t-0 header-title"><b>Insert Form</b></h4>
                                        <div class="row">
                                            <div class="col-lg-6">
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
                                                            {/* <div class="input-group m-b-15"> */}
                                                                {/* <div className="input-timepicker">
                                                                    <input id="timepicker2" name="masuk" type="text" required className="form-control" onChange={this.handleChange} />
                                                                </div>
                                                                <span class="input-group-addon bg-custom b-0 text-white"><i class="glyphicon glyphicon-time"></i></span> */}
                                                                <div class="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                                    <input type="text" name="masuk" class="form-control" value="13:14" onChange={this.handleChange} />
                                                                    <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span>
                                                                </div>
                                                            {/* </div> */}
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label">Check Out</label>
                                                        <div className="col-md-8">
                                                            {/* <div class="input-group m-b-15"> */}
                                                                {/* <div className="input-timepicker">
                                                                    <input id="timepicker3" name="pulang" type="text" required className="form-control" onChange={this.handleChange} />
                                                                </div>
                                                                <span class="input-group-addon bg-custom b-0 text-white"><i class="glyphicon glyphicon-time"></i></span> */}
                                                                <div class="input-group clockpicker " data-placement="top" data-align="top" data-autoclose="true">
                                                                    <input type="text" name="pulang" class="form-control" value="13:14" onChange={this.handleChange} />
                                                                    <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span>
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

                                    <div className="card-box table-responsive" id="shift-list">
                                        <h4 className="m-t-0 header-title"><b>Shift List</b></h4>
                                        <table id="datatable" className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                </tr>
                                                <tr>
                                                    <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                    <td>63</td>
                                                    <td>2011/07/25</td>
                                                    <td>$170,750</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </div>
=======

class Shift extends Component {
    render(){
        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        {/* Page Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Shift</h4>
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shift;
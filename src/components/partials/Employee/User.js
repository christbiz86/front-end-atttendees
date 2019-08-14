import React, { Component } from 'react';
import { DataTable } from 'react-data-components';

const url = 'http://localhost:8080/usercompany';

class User extends Component {
    state = {
        data: []
    }

    buildTable = (data) => {
        const tableColumns = [
            { title: 'Name', prop: 'idUser.nama' },
            { title: 'Address', prop: 'idUser.alamat' },
            { title: 'Birth Date', prop: 'idUser.tglLahir' },
            { title: 'Telephone', prop: 'idUser.telp' },
            { title: 'Email', prop: 'idUser.email' },
            { title: 'Unit', prop: 'idCompanyUnitPosisi.idUnit.unit' },
            { title: 'Posisi', prop: 'idCompanyUnitPosisi.idPosisi.posisi' },
            { title: 'Tipe User', prop: 'idTipeUser.tipe' },
        ]

        return (
            <DataTable 
                className="container"
                keys="id"
                columns={tableColumns}
                initialData={data}
                initialPageLenght={5}
            />
        );
    }

    componentDidMount() {
        fetch(url)
        .then(res => res.json())
        .then((rows) => {
            this.setState({ data:rows })
        })
    }

    render() {
        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        {/* Page Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Employee</h4>
                                <ol class="breadcrumb">
                                    <li>
                                        <a href="#">Attendee</a>
                                    </li>
                                    <li>
                                        <a href="#">Employee</a>
                                    </li>
                                    <li class="active">
                                        User
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
                                            <span class="hidden-xs">User List</span> 
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
                                    <div className="table table-striped table-bordered">{this.buildTable(this.state.data)}</div>                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
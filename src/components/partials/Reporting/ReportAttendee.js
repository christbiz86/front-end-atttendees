import React, { Component } from 'react';
import moment from 'moment';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

class ReportAttendee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoading: false,
            startDate: moment('08/01/2019').format('YYYY-MM-DD'),
            endDate: moment('08/31/2019').format('YYYY-MM-DD'),
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.requestAttendee();
    }

    requestAttendee = async() => {
        await axios.request('http://localhost:8080/api/attendee-recap/start-date/' + this.state.startDate + '/end-date/' + this.state.endDate, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.data)
        .then(data =>  {
            this.setState({ items: data })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isLoading:false })
        })
    }

    assemblePosts= () => {
        let items = this.state.items.map((attendee) => {
            return (
                {
                    namaUser:attendee.name,
                    jmlMasuk:attendee.masuk,
                    jmlTerlambat:attendee.terlambat
                }
            )
        });

        return items;
    }

    render(){
        const data = {
            columns: [
                {
                    label: 'Nama User',
                    field: 'namaUser'
                },
                {
                    label: 'Jumlah Masuk',
                    field: 'jmlMasuk'
                },
                {
                    label: 'Jumlah Terlambat',
                    field: 'jmlTerlambat'
                }
            ],

            rows:this.state.tableRows,
        }
        return(
            <div>
                <div className="content-page">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="btn-group pull-right m-t-15">
                                        <button type="button" className="btn btn-default dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Export <span className="m-l-5"><i className="fa fa-cog"></i></span></button>
                                        <ul className="dropdown-menu drop-menu-right" role="menu">
                                            <li><a href="#">CSV</a></li>
                                            <li><a href="#">Excel</a></li>
                                            <li><a href="#">PDF</a></li>
                                        </ul>
                                    </div>

                                    <h4 className="page-title">Report Attendee</h4>
                                    <ol className="breadcrumb">
                                        <li>
                                            <a href="#">Attendee</a>
                                        </li>
                                        <li>
                                            <a href="#">Report</a>
                                        </li>
                                        <li className="active">
                                            Report Attendee
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card-box table-responsive">
                                        <h4 className="m-t-0 header-title"><b>Report Attendee List</b></h4>
                                        <form className="form-horizontal" id="basic-form" onSubmit={this.handleSubmit}>
                                            <div className="form-row">
                                                <div className="form-group clearfix">
                                                    <div className="col-sm-6">
                                                    <label className="control-label">Date Range</label>
                                                        <div className="input-daterange input-group" id="date-range">
                                                            <input type="text" className="form-control" readOnly name="startDate" onChange={this.handleChange} placeholder="DD/MM/YYYY" />
                                                                <span className="input-group-addon bg-custom b-0 text-white">to</span>
                                                            <input type="text" className="form-control" readOnly name="endDate" onChange={this.handleChange} placeholder="DD/MM/YYYY" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary">Search</button>
                                                </div>
                                            </div>
                                        </form>
                                        <hr />
                                        <MDBDataTable striped bordered data={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="footer">
                        © 2016. All rights reserved.
                    </footer>

                </div>
            </div>
        );
    }
}

export default ReportAttendee;
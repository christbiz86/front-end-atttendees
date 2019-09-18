import React, { Component } from 'react';
import DateRangePicker from 'react-daterange-picker';
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import * as Constant from '../../_helpers/constant';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getDay, subDays } from 'date-fns';

const moment = extendMoment(originalMoment);

const stateDefinitions = {
    available: {
      color: null,
      label: 'Available',
    },
    enquire: {
      color: '#ffd200',
      label: 'Enquire',
    },
    unavailable: {
      color: 'red',
      label: 'Unavailable',
    },
  };

const dateRanges = [
    {
      state: 'enquire',
      range: moment.range(
        moment().add(2, 'weeks'),
        moment().add(2, 'weeks').add(6, 'days')
      ),
    },
    {
      state: 'unavailable',
      range: moment.range(
        moment().add(5, 'weeks'),
        moment().add(5, 'weeks').add(1, 'days')
      ),
    },
  ];

class ReportAttendee extends Component {
    constructor(props) {
        super(props);

        const today = moment();
        
        this.state = {
            items: [],
            isLoading: false,
            submitted: false,
            value: moment.range(today.clone().subtract(7, "days"), today.clone()),
            startDate: new Date()
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        
    }

    onSelect = (value, states) => {
        this.setState({ value, states, isOpen: false });
    };

    onToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.requestAttendee();
        this.setState({ 
            submitted:true, isLoading: true
        });
        console.log(moment().day());
    }

    requestAttendee = async() => {
        await axios.request(Constant.API_LIVE + '/attendee/recap/start-date/' + this.state.value.start.format('YYYY-MM-DD') + '/end-date/' + this.state.value.end.format('YYYY-MM-DD'), {
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
        // console.log(items);
            return (
                {
                    namaUser:attendee.name,
                    unit:attendee.unit,
                    posisi:attendee.posisi,
                    jmlMasuk:attendee.masuk,
                    jmlTerlambat:attendee.terlambat
                }
            )
        });

        return items;
    }

    handleDate = date => {
        this.setState({
          startDate: date
        });
      };

    downloadReportData = () => {
        fetch(Constant.API_LIVE + '/attendee/recap/start-date/' + this.state.value.start.format('YYYY-MM-DD') + '/end-date/' + this.state.value.end.format('YYYY-MM-DD') + '/report', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            if (response.ok){
                response.blob([response.data], 
                    {type: 'application/pdf'}).then(blob => {
                    var fileDownload = require('js-file-download');
                    fileDownload(blob, 'report-attendee.pdf');
                })
                }else{
                    console.log(response.status)
                };
				// window.location.href = response.url;
		}).catch(error=>
            console.log(error)
        );
    }

    render(){
        const data = {
            columns: [
                {
                    label: 'Nama User',
                    field: 'namaUser'
                },
                
                {
                    label: 'Posisi',
                    field: 'posisi'
                },
                {
                    label: 'Unit',
                    field: 'unit'
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
        const { submitted, isLoading, startDate } = this.state;

        const isWeekday = date => {
            const day = getDay(date);
            return day !== 0 && day !== 6;
        }
        
        const highlightWithRanges = [
            {
                "react-datepicker__day--highlighted-custom-1": [
                    subDays(new Date(), 1),
                    subDays(new Date(), 2),
                    subDays(new Date(), 3),
                    new Date("12-20-2019")
                    // this.state.items.map((libur) => {
                    //     new Date
                    // })
                    
                ]
            }
        ]
        console.log(new Date("09-13-2019"));
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
                                            <li><a href="#" onClick={this.downloadReportData}>PDF</a></li>
                                            <li><a href="#">CSV</a></li>
                                            <li><a href="#">Excel</a></li>
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
                                                        {/* <div className="input-group" >
                                                            <input type="text" className="form-control" onClick={this.onToggle} readOnly placeholder={this.state.value.start.format('YYYY-MM-DD')}/>
                                                                <span className="input-group-addon bg-custom b-0 text-white">to</span>
                                                            <input type="text" className="form-control" onClick={this.onToggle} readOnly placeholder={this.state.value.end.format('YYYY-MM-DD')} />
                                                        </div>

                                                        {this.state.isOpen && (
                                                            <DateRangePicker
                                                                value={this.state.value}
                                                                onSelect={this.onSelect}
                                                                singleDateRange={true}
                                                                stateDefinitions={stateDefinitions}
                                                                dateStates={dateRanges}
                                                                defaultState="available"
                                                            />
                                                        )} */}
                                                        <DatePicker
                                                            placeholderText={startDate}
                                                            selected={startDate} 
                                                            onChange={date => this.handleDate(date)} 
                                                            filterDate={isWeekday}
                                                            highlightDates={highlightWithRanges}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary">
                                                        { isLoading &&  <i className="spinner-border"> </i> }
                                                        { isLoading &&  <span> Loading </span> }
                                                        { !isLoading &&  <span> Search </span> }
                                                    </button>
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
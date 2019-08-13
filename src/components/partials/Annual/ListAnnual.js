import React, { Component } from "react";

class ListPengajuan extends Component {
    constructor(props){
        super(props);
        this.state = {
            listAnnual: [],

        };
    }

    componentDidMount() {
        fetch("http://149.129.213.242:8080/attendee/request",{
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => res.json())
            .then(listAnnual => this.setState({
                listAnnual
            }))
            .catch(error => console.log('parsing failed', error))
        }
        render() {
        const {listAnnual } = this.state;
            return (
                <div className="content-page">

                <div className="content">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <h4 className="page-title">Annual List</h4>
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="#">Annual</a>
                                    </li>
                                    <li className="active">
                                        List
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">

                                <div className="form-group clearfix">
                                    <label className="col-sm-5 control-label" ></label>
                                    <div className="col-lg-4">
                                        <h4 className="m-t-0 header-title"><b>ANNUAL LIST</b></h4>    
                                    </div>
                                </div>
                        			<p className="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                
                                <div className="table-rep-plugin">
                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" className="table  table-striped">
                                            <thead>
                                                
                                                <tr>
                                                    <th data-priority="1">NIK</th>
                                                    <th data-priority="2">Nama</th>
                                                    <th data-priority="5">Tanggal Mulai</th>
                                                    <th data-priority="6">Tanggal Selesai</th>
                                                    <th data-priority="7">Status</th>
                                                </tr>
                                            </thead>
                                                {
                                                    listAnnual.length >0 ? listAnnual.map((annual,index)=> {
                                                        return (
                                                            <tr>
                                                                <th data-priority="1">{annual.user.kode}</th>
                                                                <th data-priority="2">{annual.user.nama}</th>
                                                                <th data-priority="5">{annual.tglMulai}</th>
                                                                <th data-priority="6">{annual.tglAkhir}</th>
                                                                <th data-priority="7">{annual.status.status}</th>
                                                            </tr>    
        
                                                        )
                                                    }):null
                                                }
                                        </table>
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
export default ListPengajuan;
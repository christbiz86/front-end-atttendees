import React, { Component } from "react";

class ListPengajuan extends Component {
    constructor(props){
        super(props);
        this.state = {
            listAnnual: [],

        };
    }

    componentDidMount() {
        fetch("http://localhost:8181/request/",{
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

                                <div class="form-group clearfix">
                                    <label class="col-sm-4 control-label" ></label>
                                    <div class="col-lg-4">
                                        <h4 class="m-t-0 header-title"><b>DAFTAR CUTI SEMUA KARYAWAN </b></h4>    
                                    </div>
                                </div>
                        			<p className="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="card-box table-responsive">
                                                <table id="datatable" class="table table-striped table-bordered" ref={el => this.el = el}>
                                                    <thead>
                                                    <tr>
                                                        <th>NIK</th>
                                                        <th>Nama</th>
                                                        <th>Tanggal Mulai</th>
                                                        <th>Tanggal Selesai</th>
                                                        <th>Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>                                                     

                                                {
                                                    listAnnual.map((annual,index)=> {
                                                        return (
                                                            <tr>
                                                                <th data-priority="1">{annual.user.kode}</th>
                                                                <th data-priority="2">{annual.user.nama}</th>
                                                                <th data-priority="5">{annual.tglMulai}</th>
                                                                <th data-priority="6">{annual.tglAkhir}</th>
                                                                <th data-priority="7">{annual.status.status}</th>
                                                            </tr>    
        
                                                        )
                                                    })
                                                }
                                            </tbody>
                                                </table>
                                            </div>
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
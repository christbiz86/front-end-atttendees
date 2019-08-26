import React, { Component } from "react";

class ListAnnual extends Component {
    constructor(props){
        super(props);
        this.state = {
            listAnnual: [],

        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/request",{
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

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                <h4 class="page-title">Annual List</h4>
                                <ol class="breadcrumb">
                                    <li>
                                        <a>Annual</a>
                                    </li>
                                    <li class="active">
                                        List
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div class="row">
                        <div class="col-sm-12">
                            <div class="card-box">

                                <div class="form-group clearfix">
                                    <label class="col-sm-4 control-label" ></label>
                                    <div class="col-lg-4">
                                        <h4 class="m-t-0 header-title"><b>DAFTAR CUTI SEMUA KARYAWAN </b></h4>    
                                    </div>
                                </div>
                        			<p class="text-muted m-b-30 font-13">
										{/* Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>. */}
									</p>

                                
                                <div class="table-rep-plugin">
                                    <div class="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" class="table  table-striped">
                                            <thead>
                                                
                                                <tr>
                                                    <th data-priority="1">NIK</th>
                                                    <th data-priority="2">Nama</th>
                                                    <th data-priority="3">Posisi</th>
                                                    <th data-priority="4">Unit</th>
                                                    <th data-priority="5">Tanggal Mulai</th>
                                                    <th data-priority="6">Tanggal Selesai</th>
                                                    <th data-priority="7">Status</th>
                                                    <th data-priority="8">Keterangan</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                                     

                                                {
                                                    listAnnual.length > 0 ? listAnnual.map(annual=> {
                                                        return (
                                                            <tr key={annual.id}>
                                                                <th data-priority="1">{annual.userCompany.idUser.kode}</th>
                                                                <th data-priority="2">{annual.userCompany.idUser.nama}</th>
                                                                <th data-priority="3">Posisi</th>
                                                                <th data-priority="4">Unit</th>
                                                                <th data-priority="5">{annual.tglMulai}</th>
                                                                <th data-priority="6">{annual.tglAkhir}</th>
                                                                <th data-priority="7">{annual.status.status}</th>
                                                                <th data-priority="8">{annual.keterangan}</th>
                                                            </tr>
                                                        )
                                                    }):null
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
            );
        }


    }
export default ListAnnual;
import React, { Component } from "react";

class ListPengajuan extends Component {
    constructor(props){
        super(props);
        this.state = {
            open:false,
            daftarPengajuan: [],

        };
    }

    componentDidMount() {
        fetch("http://192.168.1.112:8181/approval")
            .then(res => res.json())
            .then(daftarPengajuan => this.setState({
                daftarPengajuan,
                isLoaded: false
            }))
            .catch(error => console.log('parsing failed', error))
        }
        render() {
        const {daftarPengajuan } = this.state;
            return (
                <div class="content">

                    <div class="row">
                        <div class="col-sm-12">

                            <h4 class="page-title">Form Pengajuan Cuti</h4>
                            <ol class="breadcrumb">
                                <li>
                                    <a href="#">Cuti</a>
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

                            
                            <div class="table-rep-plugin">
                                <div class="table-responsive" data-pattern="priority-columns">
                                    <table id="tech-companies-1" class="table  table-striped">
                                        <thead>
                                            
                                        <th>Daftar Pengajuan</th>
                                            <tr>
                                                <th data-priority="1">NIK</th>
                                                <th data-priority="3">Nama</th>
                                                <th data-priority="1">Posisi</th>
                                                <th data-priority="3">Unit</th>
                                                <th data-priority="3">Tanggal Mulai</th>
                                                <th data-priority="6">Tanggal Selesai</th>
                                                <th data-priority="6">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                            </tr>
                                        </tbody>
                                    </table>
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
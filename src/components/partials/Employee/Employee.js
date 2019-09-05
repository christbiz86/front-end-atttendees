import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as Constant from '../../_helpers/constant'
import swal from 'sweetalert';

let token = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user'));
export default class Employee extends Component {
    constructor(props){
        super(props);
        this.activeUsers = this.activeUsers.bind(this);
        this.allUsers = this.allUsers.bind(this);
        this.handleClick.bind(this);
        this.state = {
            isActiveLoading: false,
            isAllLoading: false,
            submitted: false,
            userCompany: [],
            tableRows: [],
            nama: null,
            alamat: null,
            email: null,
            tglLahir: null,
            telp: null,
            company: user.idCompanyUnitPosisi.idCompany.id,
            unit: null,
            posisi: null,
            tipe: null,
            error: null,
            data: []
        }
    }

    activeUsers = event =>{
        event.preventDefault();
        this.fetchActiveUserByFilter();
        this.setState({ submitted:true, isActiveLoading:true })
    }

    allUsers = event =>{
        event.preventDefault();
        this.fetchAllUserByFilter();
        this.setState({ submitted:true, isAllLoading:true })
    }

    fetchActiveUserByFilter = async() => {
        const userCom = {
            idUser:{
                nama: this.state.nama,
                alamat: this.state.alamat,
                email: this.state.email,
                tglLahir: this.state.tglLahir,
                telp: this.state.telp,
                idStatus: {
                    status: 'Active'
                }
            },
            idCompanyUnitPosisi:{
                idCompany: {
                    id: this.state.company,
                },
                idUnit: {
                    unit: this.state.unit,
                },
                idPosisi: {
                    posisi: this.state.posisi,
                },
            },
            idTipeUser:{
                tipe: this.state.tipe,
            }
        }
        await axios.post(Constant.API_LIVE + `/usercompany/filter`, userCom, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({
                userCompany: data
            })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isActiveLoading:false })
        })
    }

    fetchAllUserByFilter = async() => {
        const userCom = {
            idUser:{
                nama: this.state.nama,
                alamat: this.state.alamat,
                email: this.state.email,
                tglLahir: this.state.tglLahir,
                telp: this.state.telp,
                idStatus: {
                    status: null
                }
            },
            idCompanyUnitPosisi:{
                idCompany: {
                    id: this.state.company,
                },
                idUnit: {
                    unit: this.state.unit,
                },
                idPosisi: {
                    posisi: this.state.posisi,
                },
            },
            idTipeUser:{
                tipe: this.state.tipe,
            }
        }
        await axios.post(Constant.API_LIVE + `/usercompany/filter`, userCom, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({
                userCompany: data
            })
        })
        .then(async() => {
            this.setState({ tableRows:this.assemblePosts(), isAllLoading:false })
        })
    }

    handleClick = event =>{
        event.preventDefault();

        const data = {
            id: this.state.id,
            kode: this.state.kode, 
            nama: this.state.nama, 
            alamat: this.state.alamat, 
            tglLahir: this.state.tglLahir, 
            telp: this.state.telp,
            email: this.state.email,
            password: this.state.password,
            foto: this.state.foto,
            idStatus: {
                id: this.state.idStatus
            },
            createdBy: this.state.createdBy,
            createdAt: this.state.createdAt,
            updatedBy: this.state.updatedBy,
            updatedAt: this.state.updatedAt
        }

        fetch('http://localhost:8080/user', { 
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => { res.json()
            if(res.ok){
                swal("Success!", "Data Successfully deleted!", "success")
                .then(function() {
                    window.location.href = "/employee";
                });
            }
            else {
                swal("Failed", "Delete Failed!", "error")
            }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); 
    }

    assemblePosts= () => {
        const { userCompany } = this.state;
        let userCom = userCompany.map((user) => {
            console.log(user);
            return (
                {
                    namaUser: user.idUser.nama,
                    alamat: user.idUser.alamat,
                    tglLahir: user.idUser.tglLahir,
                    telp: user.idUser.telp,
                    email: user.idUser.email,
                    unit: user.idCompanyUnitPosisi.idUnit == null ? "-" : user.idCompanyUnitPosisi.idUnit.unit,
                    posisi: user.idCompanyUnitPosisi.idPosisi == null ? "-" : user.idCompanyUnitPosisi.idPosisi.posisi,
                    tipeUser: user.idTipeUser.tipe,
                    view: <Link to={{pathname: "/employee/view", data: user}} className="btn btn-inverse" key={user.id} ><i className="fa fa-user"></i></Link>,
                    register: <Link to={{pathname: "/attendee/register", data: user}} className="btn btn-purple" key={user.id} ><i className="fa fa-camera"></i></Link>
                }
            )
        });
        return userCom;
    }

    render() {
        const data = {
            columns: [
                {
                    label: 'Nama User',
                    field: 'namaUser'
                },
                
                {
                    label: 'Alamat',
                    field: 'alamat'
                },
                {
                    label: 'Tanggal Lahir',
                    field: 'tglLahir'
                },
                {
                    label: 'Telepon',
                    field: 'telp'
                },
                {
                    label: 'Email',
                    field: 'email'
                },
                {
                    label: 'Unit',
                    field: 'unit'
                },
                {
                    label: 'Posisi',
                    field: 'posisi'
                },
                {
                    label: 'Tipe User',
                    field: 'tipeUser'
                },
                {
                    label: 'View',
                    field: 'view'
                },
                {
                    label: 'Face Register',
                    field: 'register'
                },
            ],

            rows:this.state.tableRows,
        }
        const { isActiveLoading, isAllLoading } = this.state;
        // this.state.data = data;
        return(
            <div>
                <div className="content-page">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4 className="page-title">List of Employee</h4>
                                    <ol className="breadcrumb">
                                        <li>
                                            <a href="/">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/employee">Employee</a>
                                        </li>
                                        <li className="active">
                                            List
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card-box table-responsive">
                                        <h4 className="m-t-0 header-title"><b>Employee List</b></h4>
                                        <form className="form-horizontal" id="basic-form">
                                            <div className="form-row">
                                                <div className="button-list">
                                                    <button type="submit" className="btn btn-github" onClick={this.activeUsers}>
                                                        { isActiveLoading &&  <i className="fa fa-refresh fa-spin"> </i> }
                                                        { isActiveLoading &&  <span> Loading </span> }
                                                        { !isActiveLoading &&  <span> Get Active Employee </span> }
                                                    </button>

                                                    <button type="submit" className="btn btn-youtube" onClick={this.allUsers}>
                                                        { isAllLoading &&  <i className="fa fa-refresh fa-spin"> </i> }
                                                        { isAllLoading &&  <span> Loading </span> }
                                                        { !isAllLoading &&  <span> Get All Employee </span> }
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
import React, {Component} from 'react';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            userCompany: [],
            idUser:null,
            namaUser:"Agus",
            idCompanyUnitPosisi:null,
            idTipe: null
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
    }

    
    componentDidMount() {
        fetch(`http://149.129.213.242:8080/attendee/usercompany/filter`, {
            method: 'POST',
            body: JSON.stringify({
                idUser:{
                    nama: this.state.namaUser
                },
                idCompanyUnitPosisi:{
                    idCompany:{
                        id:this.state.idCompanyUnitPosisi
                    },
                    idPosisi:{
                        id:null
                    },
                    idUnit:{
                        id:null
                    }
                },
                idTipeUser:{
                    id:this.state.idTipe
                }}
            ),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }) 
        .then(response => response.json())
        .then(userCompany => this.setState({
                userCompany,isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const {userCompany } = this.state;

        return(
            <div className="content-page">

            <div className="content">

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <h4 className="page-title">Datatable</h4>
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Ubold</a>
                            </li>
                            <li>
                                <a href="#">Tables</a>
                            </li>
                            <li className="active">
                                Datatable
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-box table-responsive">
                            <h4 className="m-t-0 header-title"><b>User</b></h4>
                            <p className="text-muted font-13 m-b-30">
                                Daftar User<code>$().DataTable();</code>.
                            </p>

                            <table id="datatable" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td>Nama User</td>
                                    <td>Alamat</td>
                                    <td>Tanggal Lahir</td>
                                    <td>Telp</td>
                                    <td>Email</td>
                                    <td>Company</td>
                                    <td>Unit</td>
                                    <td>Posisi</td>
                                    <td>Tipe User</td>
                                </tr>
                            </thead>

                            { 
                                userCompany.length >0  ? userCompany.map(uc => {
                                    return (
                                            <tr key={uc.id}>
                                                <td>{uc.idUser.nama}</td>
                                                <td>{uc.idUser.alamat}</td>
                                                <td>{uc.idUser.tglLahir}</td>
                                                <td>{uc.idUser.telp}</td>
                                                <td>{uc.idUser.email}</td>
                                                <td>{uc.idCompanyUnitPosisi.idCompany.nama}</td>
                                                <td>{uc.idCompanyUnitPosisi.idUnit==null ? "-" : uc.idCompanyUnitPosisi.idUnit.unit }</td>
                                                <td>{uc.idCompanyUnitPosisi.idPosisi==null ? "-" : uc.idCompanyUnitPosisi.idPosisi.posisi}</td>
                                                <td>{uc.idTipeUser.tipe}</td>
                                            </tr>
                                    )
                                }
                                )
                                 :null 
                                
                            }

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
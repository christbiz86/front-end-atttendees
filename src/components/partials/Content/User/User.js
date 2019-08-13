import React, {Component} from 'react';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            userCompany: [{
                idUser:'',
                idCompanyUnitPosisi:'',
                idTipeUser:''
            }],
            error: null
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
    }

  
    fetchUser() {
        const userCom = this.state.userCompany;
        fetch(`http://localhost:8080/usercompany`, {
            body: JSON.stringify(userCom),
            headers:{
                'Content-Type': 'application/json'
            }
        }) 
        .then(response => response.json())
        .then(data =>
            this.setState({
                userCompany: data,
                isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
        this.fetchUser();
    }

    render() {
        return(
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

                            {this.state.error ? <p>{this.state.error.message}</p> : null}
                            {!this.state.isLoading ? (
                                this.state.userCompany.map(uc => {
                                    return (
                                        <tbody>
                                            <tr key={uc.id}>
                                                <td>{uc.idUser.nama}</td>
                                                <td>{uc.idUser.alamat}</td>
                                                <td>{uc.idUser.tglLahir}</td>
                                                <td>{uc.idUser.telp}</td>
                                                <td>{uc.idUser.email}</td>
                                                <td>{uc.idCompanyUnitPosisi.idCompany}</td>
                                                <td>{uc.idCompanyUnitPosisi.idUnit}</td>
                                                <td>{uc.idCompanyUnitPosisi.idPosisi}</td>
                                                <td>{uc.idTipeUser.tipe}</td>
                                            </tr>
                                        </tbody>
                                    );
                                
                                })
                            ) : (
                                <h3>Loading...</h3>
                            )}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
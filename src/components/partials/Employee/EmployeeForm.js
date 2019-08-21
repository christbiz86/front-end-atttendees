import React from 'react';
import moment from 'moment';

let token = localStorage.getItem('token');
class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            isLoading: true,
            kode:'',
            nama:'',
            alamat:'',
            tglLahir: moment('', moment.ISO_8601), 
            telp:'',
            email:'',
            password:'',
            foto:'null',
            idStatus: '1ead5a90-5005-4566-bad3-2ab977acec8f',
            unit: '',
            posisi: '',
            tipeUser: '',
            getCompany:[],
            getUnit:[],
            getPosisi:[],
            getTipeUser:[],
            error: null
        }
    }

    fetchUnit() {
        fetch(`http://localhost:8080/unit`)
        .then(response => response.json())
        .then(data =>
            this.setState({
                getUnit: data,
                unit: data[0].id,
                isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));         /* fetch Method GET */
    }

    fetchPosisi() {
        fetch(`http://localhost:8080/posisi`)
        .then(response => response.json())
        .then(data =>
            this.setState({
                getPosisi: data,
                posisi: data[0].id,
                isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));         /* fetch Method GET */
    }

    fetchTipeUser() {
        fetch(`http://localhost:8080/tipeuser`)
        .then(response => response.json())
        .then(data =>
            this.setState({
                getTipeUser: data,
                tipeUser: data[0].id,
                isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));         /* fetch Method GET */
    }
    
    handleChange = event =>{
        this.setState({ 
            [event.target.name]: event.target.value
         })
    }

    handleSubmit = event =>{
    event.preventDefault();

        const data = {
            user: {
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
                }
            },
            unit: {
                id: this.state.unit
            },
            posisi: {
                id: this.state.posisi
            },
            tipeUser: {
                id: this.state.tipeUser
            }
        }

        fetch('http://localhost:8080/users', { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); 
    }

    componentDidMount() {
        this.fetchUnit();
        this.fetchPosisi();
        this.fetchTipeUser();
    }
    
    render() {
        return (
            <div className="content-page">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <h4 className="m-t-0 header-title"><b>Wizard with Validation</b></h4>
                                <p className="text-muted m-b-30 font-13">
                                    Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
                                </p>
                                
                                <form id="wizard-validation-form" onSubmit={this.handleSubmit}>
                                    <div>
                                        <h3>Step 1</h3>
                                        <section>
                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label" htmlFor="name2">Kode Employee *</label>
                                                <div className="col-lg-10">
                                                    <input id="kode" name="kode" type="text" className="required form-control" onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label" htmlFor="name2">Nama Employee *</label>
                                                <div className="col-lg-10">
                                                    <input id="name2" name="nama" type="text" className="required form-control" onChange={this.handleChange}/>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label " htmlFor="surname2">Alamat *</label>
                                                <div className="col-lg-10">
                                                    <input id="surname2" name="alamat" type="text" className="required form-control" onChange={this.handleChange}/>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label " htmlFor="email2">Tanggal Lahir *</label>
                                                <div className="col-lg-10">
                                                    <input id="email2" name="tglLahir" type="date" className="required form-control" onChange={this.handleChange}/>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label " htmlFor="userName2">Email *</label>
                                                <div className="col-lg-10">
                                                    <input className="required email form-control" id="userName2" name="email" type="email" onChange={this.handleChange}/>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label " htmlFor="address2">Telepon *</label>
                                                <div className="col-lg-10">
                                                    <input id="address2" name="telp" type="text" className="required form-control" onChange={this.handleChange}/>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-12 control-label ">(*) Mandatory</label>
                                            </div>
                                        </section>
                                        <h3>Step 2</h3>
                                        <section>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label " htmlFor="email2">Unit *</label>
                                                <div className="col-lg-10">
                                                    <select className="selectpicker" data-style="btn-white" value={this.state.getUnit.indexOf(0)} name="unit" onChange={this.handleChange}>
                                                    {this.state.error ? <p>{this.state.error.message}</p> : null}
                                                    {!this.state.isLoading ? (
                                                        this.state.getUnit.map(u => {
                                                            return (
                                                                <option key={u.id} value={u.id}>{u.unit}</option>
                                                            );
                                                        })
                                                    ) : (
                                                        <h3>Loading...</h3>
                                                    )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label " htmlFor="address2">Posisi *</label>
                                                <div className="col-lg-10">
                                                    <select className="selectpicker" data-style="btn-white" defaultValue={this.state.getPosisi.indexOf(0)} name="posisi" onChange={this.handleChange}>
                                                    {this.state.error ? <p>{this.state.error.message}</p> : null}
                                                    {!this.state.isLoading ? (
                                                        this.state.getPosisi.map(p => {
                                                            return (
                                                                <option key={p.id} value={p.id}>{p.posisi}</option>
                                                            );
                                                        })
                                                    ) : (
                                                        <h3>Loading...</h3>
                                                    )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-2 control-label " htmlFor="address2">Tipe User *</label>
                                                <div className="col-lg-10">
                                                    <select className="selectpicker" data-style="btn-white" name="tipeUser" value={this.state.getTipeUser.indexOf(0)} onChange={this.handleChange}>
                                                    {this.state.error ? <p>{this.state.error.message}</p> : null}
                                                    {!this.state.isLoading ? (
                                                        this.state.getTipeUser.map(t => {
                                                            return (
                                                                <option key={t.id} value={t.id}>{t.tipe}</option>
                                                            );
                                                        
                                                        })
                                                    ) : (
                                                        <h3>Loading...</h3>
                                                    )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group clearfix">
                                                <label className="col-lg-12 control-label ">(*) Mandatory</label>
                                            </div>

                                        </section>
                                        <h3>Step 3</h3>
                                        <section>
                                            <div className="form-group clearfix">
                                                <div className="col-lg-12">
                                                    <ul className="list-unstyled w-list">
                                                        <li><b>First Name :</b> Jonathan </li>
                                                        <li><b>Last Name :</b> Smith </li>
                                                        <li><b>Email:</b> jonathan@smith.com</li>
                                                        <li><b>Address:</b> 123 Your City, Cityname. </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>
                                        <h3>Step Final</h3>
                                        <section>
                                            {/* <div className="form-group clearfix">
                                                <div className="col-lg-12">
                                                    <input id="acceptTerms-2" name="acceptTerms2" type="checkbox" className="required"/>
                                                    <label htmlFor="acceptTerms-2">I agree with the Terms and Conditions.</label>
                                                </div>
                                            </div> */}
                                            <button type="submit" class="btn btn-success btn-rounded waves-effect waves-light">
                                                <span class="btn-label"><i class="fa fa-check"></i></span>
                                                Submit
                                            </button>
                                        </section>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeForm;
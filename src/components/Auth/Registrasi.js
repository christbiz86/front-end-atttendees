import React from 'react';
import Moment from 'moment';

export default class Registrasi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            namaCompany:'',
            namaUser:'',
            jatahCuti:'',
            toleransiKeterlambatan:'',
            alamat:'',
            tglLahir: Moment('',Moment.ISO_8601),
            telepon:'',
            email:''
            // foto:''
        };
    }

    handleChange = event =>{
        this.setState({ 
            [event.target.name]:event.target.value
         })
    }

    handleClick = event =>{
        
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = { 
            namaCompany:this.state.namaCompany,
            namaUser:this.state.namaUser,
            jatahCuti:this.state.jatahCuti,
            toleransiKeterlambatan:this.state.toleransiKeterlambatan,
            alamat:this.state.alamat,
            tglLahir:this.state.tglLahir,
            telepon:this.state.telepon,
            email:this.state.email
            // foto:this.state.foto
        }

        fetch('http://149.129.213.242:8080/attendee/company', {
                method: 'POST',
                body: (JSON.stringify(data)),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response)); 
    }

    render(){
        return(
            <div>
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="card-box">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <h1><b>Registration Form</b></h1>
                            <p class="m-b-30"/>
                        </div>
                        
                        <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Company Name</label>
                                <div className="col-sm-6">
                                    <input type="text" name="namaCompany" className="form-control" required placeholder="Type something" onChange={this.handleChange}/>
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Jatah Cuti</label>
                                <div class="col-sm-3">
                                    <input data-parsley-type="number" name="jatahCuti" type="text" class="form-control" required placeholder="Enter only numbers" onChange={this.handleChange}/>
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Toleransi Keterlambatan</label>
                                <div class="col-sm-3">
                                    <input data-parsley-type="number" name="toleransiKeterlambatan" type="text" class="form-control" required placeholder="Enter only numbers" onChange={this.handleChange}/>
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Owner Name</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" name="namaUser" required placeholder="Type something" onChange={this.handleChange}/>
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Alamat</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" name="alamat" required placeholder="Type something" onChange={this.handleChange}/>
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Tanggal Lahir</label>
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="tglLahir" placeholder="mm/dd/yyyy" id="datepicker-autoclose" onChange={this.handleChange}/>
                                        <span className="input-group-addon bg-custom b-0 text-white"><i className="icon-calender"></i></span>
                                    </div>
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Telepon</label>
                                <div class="col-sm-3">
                                    <input data-parsley-type="number" name="telepon" type="text" class="form-control" required placeholder="Enter only numbers" onChange={this.handleChange}/>
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label className="col-sm-3 control-label">E-Mail</label>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control" name="email" required parsley-type="email" placeholder="Enter a valid e-mail" onChange={this.handleChange}/>
                                </div>
                            </div>
    
                            {/* <div className="form-group">
                                <label className="col-sm-3 control-label">Foto</label>
                                <div className="col-sm-6">
                                    <input type="file" className="filestyle" data-buttonname="btn-primary"/>
                                </div>
                            </div> */}
                            
                            <div class="form-group m-b-0">
								<div class="col-sm-offset-3 col-sm-9 m-t-15">
									<button type="submit" value="Submit" class="btn btn-primary">
										Submit
									</button>
							    	<button type="reset" class="btn btn-default m-l-5">
										Cancel
									</button>
								</div>
							</div>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}
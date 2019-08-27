import React, { Component } from 'react';

class Libur extends Component {
    constructor(props){
        super(props);
        this.state = {
            nama: '',
            tglMulai: '',
            tglAkhir: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();

        const data = { 
            nama: this.state.nama, 
            tglMulai: this.state.tglMulai,
            tglAkhir: this.state.tglAkhir
        }

        fetch('http://http://localhost:8080/attendees/libur', { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
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
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        {/* Page Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Holiday</h4>
                                <ol className="breadcrumb">
									<li>
										<a>Attendee</a>
									</li>
									<li>
										<a>Time Sheet</a>
									</li>
									<li class="active">
										Holiday
									</li>
								</ol>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-box">
            			            <h4 className="m-t-0 header-title"><b>Holiday Form</b></h4>
                                    <div class="row">
										<div class="col-lg-6">
                                            <form className="form-horizontal group-border-dashed" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Holiday Name</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="nama" className="form-control" required placeholder="Name" onChange={this.handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-md-2 control-label">Date</label>
                                                    <div className="col-md-8">
                                                        <div class="input-daterange input-group" id="date-range">
                                                            <input type="text" class="form-control" required name="tglMulai" onChange={this.handleChange} />
                                                            <span class="input-group-addon bg-custom b-0 text-white">to</span>
                                                            <input type="text" class="form-control" required name="tglAkhir" onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="col-sm-offset-3 col-sm-9 m-t-15">
                                                        <button type="submit" className="btn btn-primary" value="Submit">
                                                            Submit
                                                        </button>
                                                        <button type="reset" className="btn btn-default m-l-5">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
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

export default Libur;
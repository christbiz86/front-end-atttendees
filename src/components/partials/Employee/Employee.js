import React, { Component } from 'react';

class Employee extends Component {
    render(){
        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        {/* Page Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Employee</h4>
                                <ol class="breadcrumb">
									<li>
										<a href="#">Attendee</a>
									</li>
                                    <li>
                                        <a href="#">Employee</a>
                                    </li>
									<li class="active">
										Create Employee
									</li>
								</ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            	<div className="card-box">
                            		<h4 className="m-t-0 header-title"><b>Basic Form Wizard</b></h4>
                            		<p className="text-muted m-b-30 font-13">
										Use the button classNamees on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
									</p>
									
									<form id="basic-form" action="#">
                                        <div>
                                            <h3>Account</h3>
                                            <section>
                                                <div className="form-group clearfix">
                                                    <label className="col-lg-2 control-label " htmlFor="userName">User name *</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control required" id="userName" name="userName" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="form-group clearfix">
                                                    <label className="col-lg-2 control-label " htmlFor="password"> Password *</label>
                                                    <div className="col-lg-10">
                                                        <input id="password" name="password" type="text" className="required form-control"/>

                                                    </div>
                                                </div>

                                                <div className="form-group clearfix">
                                                    <label className="col-lg-2 control-label " htmlFor="confirm">Confirm Password *</label>
                                                    <div className="col-lg-10">
                                                        <button id="confirm" name="confirm" type="text" className="required form-control"></button>
                                                    </div>
                                                </div>
                                                
                                            </section>
                                            <h3>Profile</h3>
                                            <section>
                                                <div className="form-group clearfix">

                                                    <label className="col-lg-2 control-label" htmlFor="name"> First name *</label>
                                                    <div className="col-lg-10">
                                                        <input id="name" name="name" type="text" className="required form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-group clearfix">
                                                    <label className="col-lg-2 control-label " htmlFor="surname"> Last name *</label>
                                                    <div className="col-lg-10">
                                                        <input id="surname" name="surname" type="text" className="required form-control"/>

                                                    </div>
                                                </div>

                                                <div className="form-group clearfix">
                                                    <label className="col-lg-2 control-label " htmlFor="email">Email *</label>
                                                    <div className="col-lg-10">
                                                        <input id="email" name="email" type="text" className="required email form-control"/>
                                                    </div>
                                                </div>

                                                <div className="form-group clearfix">
                                                    <label className="col-lg-2 control-label " htmlFor="address">Address *</label>
                                                    <div className="col-lg-10">
                                                        <input id="address" name="address" type="text" className="form-control"/>
                                                    </div>
                                                </div>

                                                <div className="form-group clearfix">
                                                    <label className="col-lg-12 control-label ">(*) Mandatory</label>
                                                </div>

                                            </section>
                                            <h3>Hints</h3>
                                            <section>
                                                <div className="form-group clearfix">
                                                    <div className="col-lg-12">
                                                        <ul className="list-unstyled w-list">
	                                                        <li><b>First Name :</b> Jonathan </li>
	                                                        <li><b>Last Name :</b> Smith </li>
	                                                        <li><b>Emial:</b> jonathan@smith.com</li>
	                                                        <li><b>Address:</b> 123 Your City, Cityname. </li>
	                                                    </ul>
                                                    </div>
                                                </div>
                                            </section>
                                            <h3>Finish</h3>
                                            <section>
                                                <div className="form-group clearfix">
                                                    <div className="col-lg-12">
                                                        <div className="checkbox checkbox-primary">
                                                            <input id="checkbox-h" type="checkbox"/>
                                                            <label htmlFor="checkbox-h">
                                                                I agree with the Terms and Conditions.
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </form> 
                                    
                            	</div>
                        	</div>
                    	</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Employee;
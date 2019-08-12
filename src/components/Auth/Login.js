import React from 'react';

export default function Login(){
    return(
        <div>
            <div className="account-pages"/>
            <div className="clearfix"/>
            <div className="wrapper-page">
                <div className=" card-box">
                    <div className="panel-heading"> 
                        <h3 className="text-center"> Sign In to <strong className="text-custom">Attendee</strong> </h3>
                    </div> 

                    <div className="panel-body">
                        <form className="form-horizontal m-t-20" action="index.html">
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <input className="form-control" type="email" required="" placeholder="Email"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-xs-12">
                                    <input className="form-control" type="password" required="" placeholder="Password"/>
                                </div>
                            </div>

                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <div className="checkbox checkbox-primary">
                                        <input id="checkbox-signup" type="checkbox"/>
                                        <label for="checkbox-signup">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group text-center m-t-40">
                                <div className="col-xs-12">
                                    <button className="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                                </div>
                            </div>

                            <div className="form-group m-t-30 m-b-0">
                                <div className="col-sm-12">
                                    <a href="page-recoverpw.html" className="text-dark"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
            	    <div className="col-sm-12 text-center">
            		    <p>Don't have an account? <a href="page-register.html" className="text-primary m-l-5"><b>Sign Up</b></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
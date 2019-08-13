import React, {Component} from 'react';
import User from './User/User'

export default class Content extends Component {
    render () {
        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">

                        {/* <div className="row">
                            <div className="col-sm-12">
                                <div className="btn-group pull-right m-t-15">
                                    <button type="button" className="btn btn-default dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Settings <span className="m-l-5"><i className="fa fa-cog"></i></span></button>
                                    <ul className="dropdown-menu drop-menu-right" role="menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </div>

                                <h4 className="page-title">Dashboard</h4>
                                <p className="text-muted page-title-alt">Welcome to Ubold admin panel !</p>
                            </div>
                        </div> */}
                        <User />
                    </div>
                </div>

                <footer className="footer text-right">
                    © 2016. All rights reserved.
                </footer>

            </div>
        );
    }  
}
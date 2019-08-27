import React from 'react';

export default function Navbar(){
    return(
        <div className="navbar navbar-default" role="navigation">
            <div className="container">
                <div className="">
                    <div className="pull-left">
                        <button className="button-menu-mobile open-left waves-effect waves-light">
                            <i className="md md-menu"></i>
                        </button>
                        <span className="clearfix"></span>
                    </div>

                    <ul className="nav navbar-nav hidden-xs">
                        <li><a href="#" className="waves-effect waves-light">Files</a></li>
                        <li className="dropdown">
                            <a hr   ef="#" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                               role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span
                                className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/*<form role="search" className="navbar-left app-search pull-left hidden-xs">*/}
                    {/*    <input type="text" placeholder="Search..." className="form-control">*/}
                    {/*        <a href=""><i className="fa fa-search"></i></a>*/}
                    {/*</form>*/}


                    {/*<ul className="nav navbar-nav navbar-right pull-right">*/}
                    {/*    <li className="dropdown top-menu-item-xs">*/}
                    {/*        <a href="#" data-target="#" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">*/}
                    {/*            <i className="icon-bell"></i> <span className="badge badge-xs badge-danger">3</span>*/}
                    {/*        </a>*/}
                    {/*        <ul className="dropdown-menu dropdown-menu-lg">*/}
                    {/*            <li className="notifi-title"><span className="label label-default pull-right">New 3</span>Notification</li>*/}
                    {/*            <li className="list-group slimscroll-noti notification-list">*/}
                    {/*                <!-- list item-->*/}
                    {/*                <a href="javascript:void(0);" className="list-group-item">*/}
                    {/*                    <div className="media">*/}
                    {/*                        <div className="pull-left p-r-10">*/}
                    {/*                            <em className="fa fa-diamond noti-primary"></em>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="media-body">*/}
                    {/*                            <h5 className="media-heading">A new order has been placed A new order has been placed</h5>*/}
                    {/*                            <p className="m-0">*/}
                    {/*                                <small>There are new settings available</small>*/}
                    {/*                            </p>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </a>*/}

                    {/*                <!-- list item-->*/}
                    {/*                <a href="javascript:void(0);" className="list-group-item">*/}
                    {/*                    <div className="media">*/}
                    {/*                        <div className="pull-left p-r-10">*/}
                    {/*                            <em className="fa fa-cog noti-warning"></em>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="media-body">*/}
                    {/*                            <h5 className="media-heading">New settings</h5>*/}
                    {/*                            <p className="m-0">*/}
                    {/*                                <small>There are new settings available</small>*/}
                    {/*                            </p>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </a>*/}

                    {/*                <!-- list item-->*/}
                    {/*                <a href="javascript:void(0);" className="list-group-item">*/}
                    {/*                    <div className="media">*/}
                    {/*                        <div className="pull-left p-r-10">*/}
                    {/*                            <em className="fa fa-bell-o noti-custom"></em>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="media-body">*/}
                    {/*                            <h5 className="media-heading">Updates</h5>*/}
                    {/*                            <p className="m-0">*/}
                    {/*                                <small>There are <span className="text-primary font-600">2</span> new updates available</small>*/}
                    {/*                            </p>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </a>*/}

                    {/*                <!-- list item-->*/}
                    {/*                <a href="javascript:void(0);" className="list-group-item">*/}
                    {/*                    <div className="media">*/}
                    {/*                        <div className="pull-left p-r-10">*/}
                    {/*                            <em className="fa fa-user-plus noti-pink"></em>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="media-body">*/}
                    {/*                            <h5 className="media-heading">New user registered</h5>*/}
                    {/*                            <p className="m-0">*/}
                    {/*                                <small>You have 10 unread messages</small>*/}
                    {/*                            </p>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </a>*/}

                    {/*                <!-- list item-->*/}
                    {/*                <a href="javascript:void(0);" className="list-group-item">*/}
                    {/*                    <div className="media">*/}
                    {/*                        <div className="pull-left p-r-10">*/}
                    {/*                            <em className="fa fa-diamond noti-primary"></em>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="media-body">*/}
                    {/*                            <h5 className="media-heading">A new order has been placed A new order has been placed</h5>*/}
                    {/*                            <p className="m-0">*/}
                    {/*                                <small>There are new settings available</small>*/}
                    {/*                            </p>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </a>*/}

                    {/*                <!-- list item-->*/}
                    {/*                <a href="javascript:void(0);" className="list-group-item">*/}
                    {/*                    <div className="media">*/}
                    {/*                        <div className="pull-left p-r-10">*/}
                    {/*                            <em className="fa fa-cog noti-warning"></em>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="media-body">*/}
                    {/*                            <h5 className="media-heading">New settings</h5>*/}
                    {/*                            <p className="m-0">*/}
                    {/*                                <small>There are new settings available</small>*/}
                    {/*                            </p>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <a href="javascript:void(0);" className="list-group-item text-right">*/}
                    {/*                    <small className="font-600">See all notifications</small>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="hidden-xs">*/}
                    {/*        <a href="#" id="btn-fullscreen" className="waves-effect waves-light"><i className="icon-size-fullscreen"></i></a>*/}
                    {/*    </li>*/}
                    {/*    <li className="hidden-xs">*/}
                    {/*        <a href="#" className="right-bar-toggle waves-effect waves-light"><i className="icon-settings"></i></a>*/}
                    {/*    </li>*/}
                    {/*    <li className="dropdown top-menu-item-xs">*/}
                    {/*        <a href="" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true"><img src="assets/images/users/avatar-1.jpg" alt="user-img" className="img-circle"> </a>*/}
                    {/*        <ul className="dropdown-menu">*/}
                    {/*            <li><a href="javascript:void(0)"><i className="ti-user m-r-10 text-custom"></i> Profile</a></li>*/}
                    {/*            <li><a href="javascript:void(0)"><i className="ti-settings m-r-10 text-custom"></i> Settings</a></li>*/}
                    {/*            <li><a href="javascript:void(0)"><i className="ti-lock m-r-10 text-custom"></i> Lock screen</a></li>*/}
                    {/*            <li className="divider"></li>*/}
                    {/*            <li><a href="javascript:void(0)"><i className="ti-power-off m-r-10 text-danger"></i> Logout</a></li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>

    );
}
import React, { Component } from 'react';
import Profile from './Profile';

class Notifications extends Component {
    render(){
        return(
            <li className="dropdown top-menu-item-xs">
                <a href="#" data-target="#" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                    <i className="icon-bell"></i> <span className="badge badge-xs badge-danger">3</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-lg">
                    <li className="notifi-title"><span className="label label-default pull-right">New 3</span>Notification</li>
                    <li className="list-group slimscroll-noti notification-list">
                    <a href="#" className="list-group-item">
                        <div className="media">
                            <div className="pull-left p-r-10">
                                <em className="fa fa-diamond noti-primary"></em>
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading">You Have 5 New Notification</h5>
                                <p className="m-0">
                                    <small>There are new settings available</small>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="list-group-item">
                        <div className="media">
                            <div className="pull-left p-r-10">
                                <em className="fa fa-cog noti-warning"></em>
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading">New settings</h5>
                                <p className="m-0">
                                    <small>There are new settings available</small>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="list-group-item">
                        <div className="media">
                            <div className="pull-left p-r-10">
                                <em className="fa fa-bell-o noti-custom"></em>
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading">Updates</h5>
                                <p className="m-0">
                                    <small>There are <span className="text-primary font-600">2</span> new updates available</small>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="list-group-item">
                        <div className="media">
                            <div className="pull-left p-r-10">
                                <em className="fa fa-user-plus noti-pink"></em>
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading">New user registered</h5>
                                <p className="m-0">
                                    <small>You have 10 unread messages</small>
                                </p>
                            </div>
                        </div>
                    </a>
                    </li>
                    <li>
                        <a href="#" className="list-group-item text-right">
                            <small className="font-600">See all notifications</small>
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Notifications;
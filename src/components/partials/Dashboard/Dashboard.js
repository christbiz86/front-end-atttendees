import React, { Component } from 'react';
import Layout from '../../layout/Layout';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <Layout />
                <div className="content-page">
                    <div className="content">
                        <div className="container">
                            {/* Page Title */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4 className="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
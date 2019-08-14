import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { createBrowserHistory } from 'history';

import { connect } from 'react-redux';

import { history } from '../src/_helpers';
import { alertActions } from '../src/_actions';
import { PrivateRoute } from '../src/_components';

import { Login } from './components/Auth/index';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Company from './components/partials/Company/Company';
import Shift from './components/partials/TimeSheet/Shift';
import Project from './components/partials/TimeSheet/Project';
import Libur from './components/partials/TimeSheet/Libur';
import Employee from './components/partials/Employee/Employee';
import ReportAttendee from './components/partials/Reporting/ReportAttendee';
import ReportAnnual from './components/partials/Reporting/ReportAnnual'
import User from './components/partials/Employee/User';
import Coba from './components/partials/Employee/Coba';

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // this.props.clearAlerts();
    });
  }

  render(){
    const { alert } = this.props;
    return (
        <div>
              {/* <div className="App">
                <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
                  <div className="route">
                  <Route exact path="/login" component={Login} />
                  <Layout />
                    <Switch>
                      <PrivateRoute exact path="/" component={Dashboard} />
                      <Route path="/company" component={Company} />
                      <Route path="/shift" component={Shift} />
                      <Route path="/project" component={Project} />
                      <Route path="/libur" component={Libur} />
                      <Route path="/employee" component={Employee} />
                    </Switch>
                  </div>
                </Router>
              </div> */}
              <div className="App">
                <div className="jumbotron">
                  <div className="col-sm-8 col-sm-offset-2">
                    {/* {alert.message &&
                      <div className={`alert ${alert.type}`}>{alert.message}</div>
                    } */}
                  </div>
                  <Router history={history}>
                    <div>
                      <Route path="/login" component={Login} />
                      <Route exact path="/" component={Dashboard} />
                      <Route path="/company" component={Company} />
                      <Route path="/shift" component={Shift} />
                      <Route path="/project" component={Project} />
                      <Route path="/libur" component={Libur} />
                      <Route path="/employee" component={Employee} />
                      <Route path="/report-attendee" component={ReportAttendee} />
                      <Route path="/report-annual" component={ReportAnnual} />
                      <Route path="/coba" component={Coba} />
                    </div>
                  </Router>
                </div>
              </div>
            {/* <div className="App">
              <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
                <div className="route">
                  <Route exact path="/" component={} />
                </div>
              </Router>
            </div> */}
        </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default App;

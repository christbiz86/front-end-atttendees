import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Registrasi from './components/auth/Registrasi';

import ListAnnual from './components/partials/Annual/ListAnnual';
import FormAnnual from './components/partials/Annual/FormAnnual';
import AnnualRequest from './components/partials/Annual/AnnualRequest';

import { PrivateRoute } from './components/_security/PrivateRoute';
import { LoginPage } from './components/auth/LoginPage';
import { history } from './components/_helpers';
import { alertActions } from './components/_actions';
import { createBrowserHistory } from 'history';
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
            <div className="App">
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Router history={history}>
                <div className="route">
                  <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/registrasi" component={Registrasi} />
                    <PrivateRoute exact path="/" component={AnnualRequest} />
                    <PrivateRoute exact path="/annual/list" component={ListAnnual} />
                    <PrivateRoute exact path="/annual/form" component={FormAnnual} />
                    <PrivateRoute exact path="/annual/request" component={AnnualRequest} />
                    <PrivateRoute exact path="/employee" component={Employee} />
                  </Switch>
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

export default connect(mapState, actionCreators)(App);

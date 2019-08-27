import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Registrasi from './components/auth/Registrasi';

import ListAnnual from './components/partials/Annual/ListAnnual';
import FormAnnual from './components/partials/Annual/FormAnnual';
import AnnualRequest from './components/partials/Annual/AnnualRequest';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Employee from './components/partials/Employee/Employee';
import EmployeeForm from './components/partials/Employee/EmployeeForm';
import ReportAnnual from './components/partials/Reporting/ReportAnnual';
import ReportAttendee from './components/partials/Reporting/ReportAttendee';
import Libur from './components/partials/TimeSheet/Libur';
import Project from './components/partials/TimeSheet/Project';
import Shift from './components/partials/TimeSheet/Shift';
import Attendee from './components/partials/Attendee/Attendee';
import DetailAnnual from './components/partials/Annual/DetailAnnual';
import Coba from './components/partials/Header/Coba';

import { PrivateRoute } from './components/_security/PrivateRoute';
import { LoginPage } from './components/auth/LoginPage';
import { history } from './components/_helpers';
import { alertActions } from './components/_actions';

class App extends React.Component {
  constructor(props) {
      super(props);

      history.listen((location, action) => {
          // clear alert on location change
          this.props.clearAlerts();
      });
  }

  render(){
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
                    <Route exact path="/coba" component={Coba} />
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute exact path="/annual/list" component={ListAnnual} />
                    <PrivateRoute exact path="/annual/form" component={FormAnnual} />
                    <PrivateRoute exact path="/annual/request" component={AnnualRequest} />
                    <PrivateRoute exact path="/annual/detail-annual" component={DetailAnnual} />
                    <PrivateRoute exact path="/employee" component={Employee} />
                    <PrivateRoute exact path="/employee/form" component={EmployeeForm} />
                    <PrivateRoute exact path="/report/annual" component={ReportAnnual} />
                    <PrivateRoute exact path="/report/attendee" component={ReportAttendee} />
                    <PrivateRoute exact path="/timesheet/Libur" component={Libur} />
                    <PrivateRoute exact path="/timesheet/Project" component={Project} />
                    <PrivateRoute exact path="/timesheet/Shift" component={Shift} />
                    <PrivateRoute exact path="/attendee" component={Attendee} />
                    <Route path="/logout" component={LoginPage} />
                  </Switch>
                </div>
              </Router>
            </div>
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
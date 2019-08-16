import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Component } from 'react';
=======
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
import { Router, Route, Switch } from 'react-router-dom';
import Registrasi from './components/auth/Registrasi';

import ListAnnual from './components/partials/Annual/ListAnnual';
import FormAnnual from './components/partials/Annual/FormAnnual';
import AnnualRequest from './components/partials/Annual/AnnualRequest';
<<<<<<< HEAD
=======
import Dashboard from './components/partials/Dashboard/Dashboard';
import Employee from './components/partials/Employee/Employee';
import EmployeeForm from './components/partials/Employee/EmployeeForm';
import ReportAnnual from './components/partials/Reporting/ReportAnnual';
import ReportAttendee from './components/partials/Reporting/ReportAttendee';
import Libur from './components/partials/TimeSheet/Libur';
import Project from './components/partials/TimeSheet/Project';
import Shift from './components/partials/TimeSheet/Shift';
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d

import { PrivateRoute } from './components/_security/PrivateRoute';
import { LoginPage } from './components/auth/LoginPage';
import { history } from './components/_helpers';
import { alertActions } from './components/_actions';
<<<<<<< HEAD
import { createBrowserHistory } from 'history';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Company from './components/partials/Company/Company';
import Shift from './components/partials/TimeSheet/Shift';
import Project from './components/partials/TimeSheet/Project';
import Libur from './components/partials/TimeSheet/Libur';
import Employee from './components/partials/Employee/EmployeeForm';
import EmployeeForm from './components/partials/Employee/Employee';
import ReportAttendee from './components/partials/Reporting/ReportAttendee';
import ReportAnnual from './components/partials/Reporting/ReportAnnual'
import User from './components/partials/Employee/User';
import Coba from './components/partials/Employee/Coba';
import Upload from './components/partials/Annual/Upload';

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // this.props.clearAlerts();
    });
  }

  render(){
    const { alert } = this.props;
=======

class App extends React.Component {
  constructor(props) {
      super(props);

      history.listen((location, action) => {
          // clear alert on location change
          this.props.clearAlerts();
      });
  }

  render(){
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
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
<<<<<<< HEAD
                    <PrivateRoute exact path="/" component={AnnualRequest} />
=======
                    <PrivateRoute exact path="/" component={Dashboard} />
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
                    <PrivateRoute exact path="/annual/list" component={ListAnnual} />
                    <PrivateRoute exact path="/annual/form" component={FormAnnual} />
                    <PrivateRoute exact path="/annual/request" component={AnnualRequest} />
                    <PrivateRoute exact path="/employee" component={Employee} />
<<<<<<< HEAD
                    <Route exact path="/employeeform" component={Employee} />
                    <Route exact path="/upload" component={Upload} />
                  </Switch>
                </div>
              </Router>
            </div> */}
        </div>
    );
=======
                    <PrivateRoute exact path="/employee/form" component={EmployeeForm} />
                    <PrivateRoute exact path="/report/annual" component={ReportAnnual} />
                    <PrivateRoute exact path="/report/attendee" component={ReportAttendee} />
                    <PrivateRoute exact path="/timesheet/Libur" component={Libur} />
                    <PrivateRoute exact path="/timesheet/Project" component={Project} />
                    <PrivateRoute exact path="/timesheet/Shift" component={Shift} />
                  </Switch>
                </div>
              </Router>
            </div>
      </div>
  );
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

<<<<<<< HEAD
export default connect(mapState, actionCreators)(App);
=======
export default connect(mapState, actionCreators)(App);
>>>>>>> 246e098cc521fdc2b4972af15f4f49ce51df1f1d

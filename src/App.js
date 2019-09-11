import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Registrasi from './components/auth/Registrasi';

import ListAnnual from './components/partials/Annual/ListAnnual';
import FormAnnual from './components/partials/Annual/FormAnnual';
import AnnualRequest from './components/partials/Annual/AnnualRequest';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Company from './components/partials/Company/Company';
import Employee from './components/partials/Employee/Employee';
import EmployeeForm from './components/partials/Employee/EmployeeForm';
import EmployeeUpdateForm from './components/partials/Employee/EmployeeUpdateForm';
import EmployeeView from './components/partials/Employee/EmployeeView';
import ProfileView from './components/partials/Employee/ProfileView';
import ProfileUpdateForm from './components/partials/Employee/ProfileUpdateForm';
import ReportAnnual from './components/partials/Reporting/ReportAnnual';
import ReportAttendee from './components/partials/Reporting/ReportAttendee';
import Attendee from './components/partials/Attendee/Attendee';
import FaceRegister from './components/partials/Attendee/FaceRegister';
import Forbidden from './components/auth/Forbidden';
import DetailAnnual from './components/partials/Annual/DetailAnnual';
import Position from './components/partials/Position/Position';
import PositionForm from './components/partials/Position/PositionForm';
import EditPosition from './components/partials/Position/EditPosition';
import ListNotifications from './components/partials/ListNotifications/ListNotifications';
import Libur from './components/partials/TimeSheet/Libur';
import Project from './components/partials/TimeSheet/Project';
import Shift from './components/partials/TimeSheet/Shift';
import EditShift from './components/partials/TimeSheet/EditShift';
import EditProject from './components/partials/TimeSheet/EditProject';
import EditLibur from './components/partials/TimeSheet/EditLibur';
import BadRequest from './components/auth/BadRequest';
import NotFound from './components/auth/NotFound';

import { PrivateRoute, AdminRoute, SuperAdminRoute } from './components/_security/PrivateRoute';
import AnnualLeave from './components/partials/Annual/AnnualLeave';
import Unit from './components/partials/Unit/Unit';
import FomUnit from './components/partials/Unit/FormUnit';
import EditUnit from './components/partials/Unit/EditUnit';
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
                    <Route exact path="/registrasi" component={Registrasi} />
                    <Route exact path="/logout" component={LoginPage} />
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/forbidden" component={Forbidden} />
                    <Route exact path="/bad-request" component={BadRequest} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <AdminRoute exact path="/annual/list" component={ListAnnual} />
                    <PrivateRoute exact path="/annual/form" component={FormAnnual} />
                    <AdminRoute exact path="/annual/request" component={AnnualRequest} />
                    <PrivateRoute exact path="/annual/detail" component={DetailAnnual} />
                    <AdminRoute exact path="/annual/leave" component={AnnualLeave} />
                    <PrivateRoute exact path="/company" component={Company} />
                    <AdminRoute exact path="/employee" component={Employee} />
                    <AdminRoute exact path="/employee/form" component={EmployeeForm} />
                    <AdminRoute exact path="/employee/update" component={EmployeeUpdateForm} />
                    <AdminRoute exact path="/employee/view" component={EmployeeView} />
                    <PrivateRoute exact path="/profile" component={ProfileView} />
                    <PrivateRoute exact path="/profile/edit" component={ProfileUpdateForm} />
                    <AdminRoute exact path="/report/annual" component={ReportAnnual} />
                    <AdminRoute exact path="/report/attendee" component={ReportAttendee} />
                    <PrivateRoute exact path="/timesheet/Libur" component={Libur} />
                    <PrivateRoute exact path="/timesheet/Project" component={Project} />
                    <PrivateRoute exact path="/timesheet/Shift" component={Shift} />
                    <AdminRoute exact path="/position" component={Position} />
                    <AdminRoute exact path="/position/form" component={PositionForm} />
                    <AdminRoute exact path="/position/form-edit" component={EditPosition} />
                    <PrivateRoute exact path="/notifications" component={ListNotifications} />
                    <AdminRoute exact path="/unit/form" component={FomUnit} />
                    <AdminRoute exact path="/unit" component={Unit} />
                    <AdminRoute exact path="/unit/edit" component={EditUnit} />
                    <PrivateRoute exact path="/attendee/absen" component={Attendee} />
                    <AdminRoute exact path="/attendee/register" component={FaceRegister} />
                    <PrivateRoute exact path="/timesheet/libur" component={Libur} />
                    <PrivateRoute exact path="/timesheet/project" component={Project} />
                    <PrivateRoute exact path="/timesheet/shift" component={Shift} />
                    <PrivateRoute exact path="/timesheet/edit-shift" component={EditShift} />
                    <PrivateRoute exact path="/timesheet/edit-project" component={EditProject} />
                    <PrivateRoute exact path="/timesheet/edit-libur" component={EditLibur} />
                    <Route component={NotFound} />
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
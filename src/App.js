import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { createBrowserHistory } from 'history';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Company from './components/partials/Company/Company';
import Shift from './components/partials/TimeSheet/Shift';
import Project from './components/partials/TimeSheet/Project';
import Libur from './components/partials/TimeSheet/Libur';
import ListAnnual from './components/partials/Annual/ListAnnual';
import FormAnnual from './components/partials/Annual/FormAnnual';
import Login from './components/Auth/Login';
import User from './components/partials/Employee/User';
import Annual from './components/partials/Annual/ListAnnual';
import Registrasi from './components/Auth/Registrasi';

import { PrivateRoute } from './components/_security/PrivateRoute';
import { LoginPage } from './components/Auth/LoginPage';
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
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path="/company" component={Company} />
                    <PrivateRoute exact path="/shift" component={Shift} />
                    <PrivateRoute exact path="/project" component={Project} />
                    <PrivateRoute exact path="/libur" component={Libur} />
                    <PrivateRoute exact path="/annual/list" component={ListAnnual} />
                    <PrivateRoute exact path="/annual/form" component={FormAnnual} />
                    <PrivateRoute exact path="/user" component={User} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/registrasi" component={Registrasi} />
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
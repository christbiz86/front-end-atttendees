import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Registrasi from './components/Auth/Registrasi';
import ListAnnual from './components/partials/Annual/ListAnnual';
import FormAnnual from './components/partials/Annual/FormAnnual';
import AnnualRequest from './components/partials/Annual/AnnualRequest';
import Layout from './components/layout/Layout'

import { PrivateRoute } from './components/_security/PrivateRoute';
import { LoginPage } from './components/Auth/LoginPage';
import { history } from './components/_helpers';
import { alertActions } from './components/_actions';
import { createBrowserHistory } from 'history';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Company from './components/partials/Company/Company';
import Shift from './components/partials/TimeSheet/Shift';
import Project from './components/partials/TimeSheet/Project';
import Libur from './components/partials/TimeSheet/Libur';
import Employee from './components/partials/Employee/Employee';


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
        <Layout></Layout>
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
                    <Route exact path="/annual/list" component={ListAnnual} />
                    <Route exact path="/annual/form" component={FormAnnual} />
                    <Route exact path="/annual/request" component={AnnualRequest} />
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
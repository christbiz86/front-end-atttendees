import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Registrasi from './components/Auth/Registrasi';
import { PrivateRoute } from './components/_security/PrivateRoute';
import { LoginPage } from './components/Auth/LoginPage';
import { history } from './components/_helpers';
import { alertActions } from './components/_actions';
import Layout from './components/layout/Layout';
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
      <div className="App">
        <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
          <div className="route">
          <Route exact path="/login" component={LoginPage} />
          <Layout />
            <Switch>
              <Route exact="/" component={Dashboard} />
              <Route path="/company" component={Company} />
              <Route path="/shift" component={Shift} />
              <Route path="/project" component={Project} />
              <Route path="/libur" component={Libur} />
              <Route path="/employee" component={Employee} />
            </Switch>
          </div>
        </Router>
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

export default connect(mapState, actionCreators)(App);
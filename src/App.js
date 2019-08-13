import React from 'react';
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

function App() {
  return (
      <div>
          <Layout />
            <div className="App">
              <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
                <div className="route">
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/shift" component={Shift} />
                    <Route exact path="/project" component={Project} />
                    <Route exact path="/libur" component={Libur} />
                    <Route exact path="/annual/list" component={ListAnnual} />
                    <Route exact path="/annual/form" component={FormAnnual} />
                    <Route exact path="/user" component={User} />
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

export default App;

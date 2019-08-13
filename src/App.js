import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { createBrowserHistory } from 'history';
import Login from './components/Auth/Login';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Company from './components/partials/Company/Company';
import Shift from './components/partials/TimeSheet/Shift';
import Project from './components/partials/TimeSheet/Project';
import Libur from './components/partials/TimeSheet/Libur';
import Employee from './components/partials/Employee/Employee';

function App() {
  return (
      <div>
            <div className="App">
              <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
                <div className="route">
                <Route exact path="/login" component={Login} />
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

export default App;

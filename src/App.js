import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { createBrowserHistory } from 'history';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Annual from './components/partials/Annual/ListAnnual';
import Registrasi from './components/Auth/Registrasi';
import Company from './components/partials/Company/Company';
import Shift from './components/partials/TimeSheet/Shift';
import Project from './components/partials/TimeSheet/Project';
import Libur from './components/partials/TimeSheet/Libur';

function App() {
  return (
      <div>
            <div className="App">
              <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
                <div className="route">
                  {/* <Layout /> */}
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                    <Route exact path="/Registrasi" component={Registrasi} />
                    <Route exact path="/Annual" component={Annual} />
                    {/* <Route exact path="/company" component={Company} />
                    <Route exact path="/shift" component={Shift} />
                    <Route exact path="/project" component={Project} />
                    <Route exact path="/libur" component={Libur} /> */}
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

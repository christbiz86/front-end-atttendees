import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { createBrowserHistory } from 'history';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Company from './components/partials/Company/Company';
import Shift from './components/partials/TimeSheet/Shift';
import Project from './components/partials/TimeSheet/Project';
import Libur from './components/partials/TimeSheet/Libur';
import Employee from './components/partials/Employee/Employee';
import Annual from './components/partials/Annual/Annual';
import Unit from './components/partials/Unit/Unit';
import Posisi from './components/partials/Position/Position';

function App() {
  return (
      <div>
          <Layout />
            <div className="App">
              <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
                <div className="route">
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/shift" component={Shift} />
                    <Route exact path="/project" component={Project} />
                    <Route exact path="/holiday" component={Libur} />
                    <Route exact path="/employee" component={Employee} />
                    <Route exact path="/annual" component={Annual} />
                    <Route exact path="/unit" component={Unit} />
                    <Route exact path="/posisi" component={Posisi} />
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

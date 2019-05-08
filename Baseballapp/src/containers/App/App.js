import React from 'react';
import './App.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Serverless from '../../containers/Serverless';
import WithRedux from '../../containers/WithRedux';
import WithServer from '../../containers/WithServer';
import Navigation from '../../components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <h1>React Baseball!</h1>
          <Navigation />
          <div className="mainContainer">
            <Switch>
              <Route exact={true} path='/' component={Serverless} />
              <Route exact={true} path='/withredux' component={WithRedux} />
              <Route exact={true} path='/withserver' component={WithServer} />
            </Switch>
          </div>
        </>
      </Router>

    </div>
  );
}

export default App;

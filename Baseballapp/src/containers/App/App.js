import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Serverless from '../../containers/Serverless';
import WithServer from '../../containers/WithServer';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <div className="mainContainer">
            <Switch>
              <Route exact={true} path='/' component={Serverless} />
              <Route exact={true} path='/withserver' component={WithServer} />
            </Switch>
          </div>
        </>
      </Router>

    </div>
  );
}

export default App;

import React from 'react';
import { createBrowserHistory } from 'history';

import { Router, Route, Switch } from "react-router-dom";
import { Home } from 'pages';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
/** React Modules **/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
// import Routes from './routes.jsx';
import { createHashHistory } from 'history';
// Reducers - combined
import { default as reducers } from './reducers';
// Store - All Data Bank - Single source of truth
import store from "./store.js";

// Components
import App from './App.jsx';
import CompanyDetail from './Components/CompanyDetail/CompanyDetail.js';

const app = document.getElementById('app');
const history = createHashHistory();

render((
  <Provider store = {store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/companies/:id" component={CompanyDetail} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), app);

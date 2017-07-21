import React from 'react';
// import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes.jsx';
import { createBrowserHistory } from 'history';
import { default as reducers } from './reducers';
import store from "./store.js";
import App from './App.jsx';
import CompanyDetail from './Components/CompanyDetail/CompanyDetail.js';

const app = document.getElementById('app');

 // <Provider store = {store}>
 //    <ConnectedRouter history={history}>
 //      <div>
 //        <Switch>
 //          <Route exact path="/" component={App} />
 //          <Route path = "/companies/59712e89ba0e26041b6a36db" component={CompanyDetail} />
 //        </Switch>
 //      </div>
 //    </ConnectedRouter>
 //  </Provider>

 // <Provider store = {store}>
 //  <App />
 // </Provider>

render((
  <Provider store = {store}>
    <App />
  </Provider>
), app);

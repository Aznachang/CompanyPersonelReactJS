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

const app = document.getElementById('app');

 // <Provider store = {store}>
 //    <ConnectedRouter history={history}>
 //      <div>
 //        <Switch>
 //          <Route exact path="/" component={App} />
 //        </Switch>
 //      </div>
 //    </ConnectedRouter>
 //  </Provider>

render((
  <Provider store = {store}>
    <App />
  </Provider>
), app);

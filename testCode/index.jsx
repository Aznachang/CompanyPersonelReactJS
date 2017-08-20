/** React Modules **/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddlware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// // Reducers - combined
import { default as reducers } from './reducers';
// Store - All Data Bank - Single source of truth
import store from "./store.js";

// Components
import App from './App.jsx';
// import Main from './Components/Main/Main.js'
// import CompanyDetail from './Components/CompanyDetail/CompanyDetail.js';

const app = document.getElementById('app');
const history = createHistory();

render((
  <Provider store = {store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
), app);

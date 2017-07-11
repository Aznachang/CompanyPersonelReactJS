import React from 'react';
import {render} from 'react-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from "react-redux";

import AddCompanyForm from './Forms/addCompanyForm.jsx';
import AddPersonForm from './Forms/addPersonForm.jsx';
import App from './App.jsx';
import store from "./store.js";
import thunk from 'redux-thunk';
import Routes from './routes.jsx';

const app = document.getElementById('app');

// <BrowserRouter component = {App}>
//   <Provider store = {store}>
//     <Route path="/" component={App}/>
//   </Provider>
// </BrowserRouter>

render((
  <Provider store = {store}>
    <App />
  </Provider>
), app);

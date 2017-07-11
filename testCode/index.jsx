import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux"

import AddCompanyForm from './Forms/addCompanyForm.jsx';
import AddPersonForm from './Forms/addPersonForm.jsx';
import App from './App.jsx';
import store from "./store.js"

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
